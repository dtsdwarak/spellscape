function DataObject(jsonData) {
    
    this.__actualData__ = jsonData;//Not needed we can remove this
    this.__wrappedData__ = {};
    this.__changedData__ = {update:{}, create:{}, delete:{}};
    this.__reference__ = {parent: null, name: null};

    this.id = jsonData.Id;
    
    this.__init__ = function(jsonData) {
        for(var key in jsonData) {
            var value = jsonData[key];
            if(_.isArray(value)) {
                var childList = [];
                for (var i in value) {
                    var childObj = new DataObject(value[i]);
                    childObj.__reference__.parent = this;
                    childObj.__reference__.name = key;
                    childList.push(childObj);
                }
                this.__wrappedData__[key] = childList;
            } else if(_.isObject(value)){
                this.__wrappedData__[key] = new DataObject(value);            
            }else {
                this.__wrappedData__[key] = value;
                //setting getter and setter for angular two way binding
                this[key] = function(field){
                    return function(value) {
	                    return arguments.length ? (this.update(field,value)) : this.getValue(field);
                    }
                }(key);
            }
        }
    }
    this.__init__(jsonData);
    
    this.getterSetter = function(field) {
        var obj = this;
        return function(newValue) {
            if (angular.isDefined(newValue)) {
                obj.update(field, newValue);
            }
            return obj.getValue(field);
        }
    }
    
    this.getValue = function(name) {
        var updatedData = this.__changedData__.update
        var value = null;

        if(updatedData[name] != null) {
            value = updatedData[name];
        } else if(this.__wrappedData__[name] != null) {
            value = this.__wrappedData__[name];
        }

        return value;
    }
    
    this.getDisplayValue = function(name) {
        var updatedData = this.__changedData__.update
        var value = null;

        if(updatedData[name] != null) {
            value = updatedData[name];
        } else if(this.__wrappedData__[name] != null) {
            value = this.__wrappedData__[name];
        }

        return value;
    }

    this.getParent = function() {
        return this.__reference__.parent;
    }
    
    this.getList = function(childName, sortBy) {
        var childList = [];
        var refList = this.__wrappedData__[childName];
        var deletedList = this.__changedData__.delete[childName];
        if(refList) {
            for(var i in refList) {
                var childObj = refList[i];
                //check whether the child item got deleted
                var isDeleted = _.find(deletedList, function(id){return id == childObj.id})
                if(!isDeleted) {
                    childList.push(refList[i]);
                }
             }           
        }
        var createdDict = this.__changedData__.create[childName];
        if(createdDict) {
            //append the newly created child record
            for(var id in createdDict){
                childList.push(createdDict[id]);
            }
        }

        if(sortBy) {
            return _.sortBy(childList, function(obj){
                return obj.getValue(sortBy);
            });
        }
        return childList;
    }
    
    this.update = function(key, value) {
        if(typeof(key) == "object") {
            _.extend(this.__changedData__.update, key)
        } else {
            this.__changedData__.update[key] = value;
        }
        //propagate the changes to root
        this.propagateChanges();
    }
    
    this.create = function(childName) {
        var createdDict = this.__changedData__.create[childName];
        if(createdDict == null ) {
            createdDict = {}; 
            this.__changedData__.create[childName] = createdDict;
        }
        var newId = new Date().getTime();
        var childObj = new DataObject({Id: newId});
        childObj.__reference__.parent = this;
        childObj.__reference__.name = childName;
        
        createdDict[newId] = childObj;
        //propagate the changes to root
        this.propagateChanges();
        return createdDict[newId];
    }
    
    this.delete = function(childName, childId) {
        var createdDict = this.__changedData__.create[childName];
        if(createdDict && createdDict[childId]) {
            delete createdDict[childId];
            //Need to remove the created propagation
            //else they have to handle the change summary in server side
        } else {
            var deletedList = this.__changedData__.delete[childName];
            if(deletedList == null) {
                deletedList = [];
                this.__changedData__.delete[childName] = deletedList;
            }
            deletedList.push(childId);
            //propagate the changes to root
            this.propagateChanges();
        }
    }
    
    /*
     * This method propagates the changes to root object
     * so that we can get the change summary(without traversing to all the methods)
     */
    this.propagateChanges = function() {
        var parentRef = this.__reference__.parent;
        if (parentRef != null) {
	        var childName = this.__reference__.name;
	        var parentCreateDict = parentRef.__changedData__.create;
	        
	        //if updated record is newly created record then no need to propagate the changes again
	        if(parentCreateDict[childName] && parentCreateDict[childName][this.id]) {
	           return;
	        } 
	        var parentUpdateDict = parentRef.__changedData__.update;
	        var updateDict = parentUpdateDict[childName];
	        if(updateDict == null ) {
	            updateDict = {}; 
	            parentUpdateDict[childName] = updateDict
	        }
	        //stop parent propagation and updation if the object is already available
	        if(updateDict[this.id] == null) {
	           updateDict[this.id] = this;
	           parentUpdateDict[childName] = updateDict;
	           parentRef.propagateChanges();
	        }
	    }
    }
    
    this.__keys__ = function() {
        var keys = [];
        for (var key in this.__wrappedData__) {
          keys.push(key);
        }
        return keys;
    }
    
    this.getChangeSummary = function() {
        var changeSummary = {};
        changeSummary[this.id] = {};
        //process the root object
        var data = this.processChangedData(this);
        if (data){
            changeSummary = data;
        }
        return changeSummary[this.id];   
    }
    
    /*
     * __changedData__ = {
     *  update: {
     *      Name: Vivek,
     *      Age: 120,
     *      childName: {
     *          childId1: {},//new DataObject
     *          childId2: {},//new DataObject
     *      }
     *  },
     *  create: {
     *      childName: {
     *          childId1: {},//new DataObject
     *          childId2: {},//new DataObject
     *      }
     *  },
     *  delete: {
     *      childName: [childId1, childId2]
     *  }
     * }
     */
    this.processChangedData = function(obj) {
        var changedData = obj.__changedData__;
        var data = null;
        if(_.size(changedData.update) > 0 || _.size(changedData.create) > 0 || _.size(changedData.delete) > 0) {
            data = {};
            data[obj.id] = {};
        }
        if(_.size(changedData.update) > 0) {
            var updateDict = {};
            for (var key in changedData.update) {
                var value = changedData.update[key];
                if(_.isObject(value)) {
                    var childList = [];
                    //updated child list
                    for(var childId in value){
                        var childObj = value[childId];
                        childList.push(this.processChangedData(childObj));
                    }
                    updateDict[key] = childList
                } else {
                    updateDict[key] = value;
                }
            }
            data[obj.id].update = updateDict;
        }
        if(_.size(changedData.create) > 0) {
            var createdDict = {};
            for (var childName in changedData.create) {
                var createdChild = changedData.create[childName];
                var childList = [];
                createdDict[childName] = childList;
                //newly created child objects
                for(var childId in createdChild){
                    var childObj = createdChild[childId];
                    childList.push(this.processChangedData(childObj));
                }
            }
            data[obj.id].create = createdDict;
        }
        if( _.size(changedData.delete) > 0) {
            //existing child objects which got removed
            data[obj.id].delete = changedData.delete;
        }
        return data;
    }
}

function unWrapDict(dataObject) {
    var wrappedDict = dataObject.__wrappedData__;
    var actualData = {};
    for(var key in wrappedDict) {
        var value = wrappedDict[key];
        if(_.isArray(value)) {
            var deletedList = dataObject.__changedData__.delete[key];
            var childList = [];
            for (var i in value) {
                var childObj = value[i];
                //check whether the child item got deleted
                var isDeleted = _.find(deletedList, function(id){return id == childObj.id})
                if(!isDeleted) {
                    childList.push(unWrapDict(value[i]));
                }
            }
            actualData[key] = childList;
        } else if(_.isObject(value)) {
            actualData[key] = unWrapDict(value);            
        } else {
            actualData[key] = value;
        }
    }
    if(_.size(dataObject.__changedData__.create) > 0) {
        for(var childName in dataObject.__changedData__.create) {
            var createdDict = dataObject.__changedData__.create[childName];
            //append the newly created child record
            var childList = actualData[childName];
            if(!childList) {
                childList = [];
                actualData[childName] = childList;
            } 
            for(var id in createdDict){
                childList.push(unWrapDict(createdDict[id]));
            }
        }
    }
    if(_.size(dataObject.__changedData__.update) > 0) {
        var updateDict = {};
        for (var key in dataObject.__changedData__.update) {
            var value = dataObject.__changedData__.update[key];
            if(!_.isObject(value)) {
                updateDict[key] = value;
            }
        }
        _.extend(actualData, updateDict);
    }
    return actualData;
}

function wrapDict(item) {
    return new DataObject(item);
}

function wrapList(items) {
    var wrappedList = [];
    for (var i in items){
        wrappedList.push(wrapDict(items[i]));
    }
    return wrappedList;
}
