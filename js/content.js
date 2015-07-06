// Listen for message from Background - background.js
chrome.extension.onMessage.addListener(function(message, sender, sendResponse){
	switch(message.type){
		case "highlight":

			//Changing the page's Language to the Selected Translated Language
			document.getElementById("langSelect").value="string:"+message.lang; //Change the page's language dropdown

			//Change the page's Angular language
			window.postMessage({ type: "CHANGE_PAGE_LANGUAGE", text: "Hello from the webpage!" }, "*");

			// var translate_elements = document.querySelectorAll("[translate]");
			var strings = $('[translate]');
			if(strings.length){

				//Load page content onto browser page for Modal
				$.ajax({
				    url: chrome.extension.getURL("spellscape/spellscape.html"),
				    success: function (data) { $('body').append(data); },
				    dataType: 'html'
				});

				//Pass message to Browser Page
				window.postMessage({ type: "HIGHLIGHT_TRANSLATE", text: "Hello from the webpage!" }, "*");

				alert("Translate these strings please");
			}
			else
				alert("GetText Module unavailable");
		break;
	}
});