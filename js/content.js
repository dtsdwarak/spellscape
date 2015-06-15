// Listen for message from Background - background.js
chrome.extension.onMessage.addListener(function(message, sender, sendResponse){
	switch(message.type){
		case "highlight":

			// console.log(chrome.extension.getURL("spellscape/spellscape.html"));
			var translate_elements = document.querySelectorAll("[translate]");

			if(translate_elements.length){

				//Modal HTML
				// $('body').append(chrome.extension.getURL("spellscape/spellscape.html"));

				$.ajax({
				    url: chrome.extension.getURL("spellscape/spellscape.html"),
				    success: function (data) { $('body').append(data); },
				    dataType: 'html'
				});


				//Hyperlinking Translate Strings to Modal
				for(var i=0;i<translate_elements.length;i++){
					translate_elements[i].innerHTML='<a href="#" data-target="#spellScapeModal" data-toggle="modal" class="forTranslation">' + translate_elements[i].innerText + '</a>';
				}
				$(".forTranslation").click(function(){
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