var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#text-output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text =" + input;
}

function errorHandler(error) {
    console.log("error occurred", error);
    alert("something went wrong.. please try again.")
}

function clickHandler() {
    // outputDiv.innerText = "ajsjsjsjsjs  " + txtInput.value;

    var inputText = txtInput.value; // taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; //output


        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);