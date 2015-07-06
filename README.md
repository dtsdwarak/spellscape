#SpellScape

Chrome extension that lets users give custom translations to their Angular App.

## Dependencies

* [Angular GetText](https://angular-gettext.rocketeer.be/) should be used within your Angular App
* ```ng-controller="dataProcessControl"```. If you need to change it, make similar changes in ```angular-spellscape.js```
* Also make sure you add the custom events given at the end of every page you want to run this on.

```javascript
<script type="text/JavaScript">
    $(document).ready(function(){
        window.addEventListener("message", function(event) {
          if (event.source != window)
            return;


          if (event.data.type && (event.data.type == "HIGHLIGHT_TRANSLATE")) {
                var strings = $('[translate]');

                for(var i=0;i<strings.length;i++){
                    $(strings[i]).html('<a href="#" data-target="#spellScapeModal" data-toggle="modal" class="forTranslation ng-scope">'+ $(strings[i]).text() +'</a>');
                }

                //For Modal Popup Input field
                $(".forTranslation").click(function(){
                    $("#input_text").val(this.text);
                });

                var i=0, val;
                var colors = ["#EE6E73","#00AF43"];
                window.setInterval(function(){
                    val = (i%2==0)?0:1;
                    strings.animate({backgroundColor: colors[val]},3000);
                    i++;    
                },30);
                
          }

          if (event.data.type && (event.data.type == "CHANGE_PAGE_LANGUAGE")) {

            // console.log("Content script received: " + event.data.text);
            // port.postMessage(event.data.text);

             changeAngularLanguage();
              var json;
              console.log("Angular language changed Successfuly!");
              for ( var i = 0, len = localStorage.length; i < len; ++i ) {
                //console.log( localStorage.getItem( localStorage.key( i ) ) );
                json={};
                json[localStorage.key(i)]=localStorage.getItem(localStorage.key(i));
                angular.element('select').scope().updateLanguage(json);                    
              }
          }

          else if(event.data.type && (event.data.type == "SAVE_TRANSLATION")){

                var input = document.getElementById("input_text").value;
                var translated_text = document.getElementById("translated_text").value;

                var json={};
                json[input]=translated_text;
                //console.log("value to be stored = "+ json);
                localStorage.setItem(input,translated_text);

                alert('Translation Saved Successfuly');
                angular.element('select').scope().updateLanguage(json);
                //console.log("mapping done successfully!");
          }

        }, false);
    });
</script>
```

## Sample App

Sample application has been stored inside ```static/main.html``` and Angular-GetText modules have been provided inside ```static/shared/js/spellscape/```

Make sure to remove the ```static``` folder when you load the Chrome plugin onto browser.