var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#text-input");
var outputText = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    alert("Please enter some text to translate!!");
}

function clickEventHandler() {
    var textInput = inputText.value;
    fetch(constructUrl(textInput))
        .then(response => response.json())
        .then(json =>{
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);