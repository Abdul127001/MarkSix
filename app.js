//https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json
//https://api.funtranslations.com/translate/

var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtInput");
var output = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//var serverURL = "https://api.funtranslations.com/translate/minion.json";
var serverURL = "https://api.funtranslations.com/translate/pirate.json";
//var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationUrl(txt) {
    return serverURL + "?" + "text=" + txt;
}


function errorHnadler(error) {
    console.log("Some Error Occured", error);
    //alert("Some Error Occured" + error);
}

btntranslate.addEventListener("click", function clickEventHandler(){
    //output.innerText = "Output: " + txtInput.value;
    var InputText = txtInput.value;
    fetch(getTranslationUrl(InputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText; 
    })
    .catch(errorHnadler);
})

/*
 {
        var translatedText = json.contents.translated;
        output.innerText = translatedText; // output
    }
    */