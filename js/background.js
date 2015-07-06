//For response from Browser Action - popup.html
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "req-highlight":

        	//Set language to chosen langugage
			chrome.storage.local.set({setLanguage: request.lang},function(){/**/});
			//Call to content.js
            highlightTags(request.lang);
        break;
    }
    return true;
});

// send a message to Content Script
var highlightTags = function(lang) {
	chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: "highlight","lang":lang});
	});
}