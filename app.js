var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occurred", error);
    alert("something went wrong.. please try again.");
}

function clickHandler() {
    // taking input
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);