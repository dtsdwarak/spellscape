window.onload=function(){

	chrome.storage.local.get('setLanguage',function(result){
		if(result.setLanguage){
			//alert(result.setLanguage);
			document.getElementById("languageSelect").value=result.setLanguage;
		}
		else
		document.getElementById("languageSelect").value='en';
	});

	document.getElementById("highlight").onclick = function(){

		console.log("request passing from popup to background");

		//alert("Translating strings now!");

		//Send message to background.js (background page)
		chrome.extension.sendMessage({
			"type": "req-highlight",
			"lang": document.getElementById("languageSelect").value
		});
	}
}