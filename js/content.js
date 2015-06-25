// Listen for message from Background - background.js
chrome.extension.onMessage.addListener(function(message, sender, sendResponse){
	switch(message.type){
		case "highlight":

			//Changing the page's Language to the Selected Translated Language
			document.getElementById("langSelect").value="string:"+message.lang; //Change the page's language dropdown

			//Change the page's Angular language
			window.postMessage({ type: "CHANGE_PAGE_LANGUAGE", text: "Hello from the webpage!" }, "*");

			var translate_elements = document.querySelectorAll("[translate]");

			if(translate_elements.length){

				$.ajax({
				    url: chrome.extension.getURL("spellscape/spellscape.html"),
				    success: function (data) { $('body').append(data); },
				    dataType: 'html'
				});

				//Hyperlinking Translate Strings to Modal
				for(var i=0;i<translate_elements.length;i++){
					//console.log(translate_elements[i]);
					// translate_elements[i].removeAttribute("translate");
					translate_elements[i].innerHTML='<a href="#" data-target="#spellScapeModal" data-toggle="modal" class="forTranslation ng-scope">' + translate_elements[i].innerText + '</a>';
				}
				$(".forTranslation").click(function(){
					//this).removeAttr("href");
					//console.log("This text value = "+this.text);
					$("#input_text").val(this.text);
					//console.log("the value is " + this.text);
				});
				
				//Yellow Linking
				for(var i=0;i<translate_elements.length;i++){
					translate_elements[i].style.backgroundColor="yellow";
				}
				alert("Translate these strings please");
			}
			else
				alert("GetText Module unavailable");
		break;
	}
});