window.onload=function(){
	document.getElementById("highlight").onclick = function(){
		//Send message to background
		chrome.extension.sendMessage({
			"type": "req-highlight"
		});
	}
}