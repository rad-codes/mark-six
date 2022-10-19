var btntranslate = document.querySelector("#btntranslate");
var txtinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslation(input) {
    return serverURL + "?" + "text=" + input
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}
function clickHandler() {
    var inputtext = txtinput.value; 
    fetch(getTranslation(inputtext))
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            outputdiv.innerText = translatedtext; 
           })
        .catch(errorHandler)
};
btntranslate.addEventListener("click", clickHandler)