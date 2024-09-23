// All Function 

function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}

function getTextValue(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function getOnlyText(id){
    const text = document.getElementById(id).innerText;
    return text;
}

