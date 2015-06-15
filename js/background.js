//For response from Browser Action - popup.html
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.type) {
        case "req-highlight":
            highlightTags();
        break;
    }
    return true;
});

// send a message to Content Script
var highlightTags = function() {
	chrome.tabs.getSelected(null, function(tab){
	    chrome.tabs.sendMessage(tab.id, {type: "highlight"});
	});
}