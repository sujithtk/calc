function getValue(value){    
    document.getElementsByClassName("screen")[0].value+=value
}

function clearDisplay(){
    document.getElementsByClassName("screen")[0].value=""
}

function executeCalculation(){
   result = eval(document.getElementsByClassName("screen")[0].value)
   document.getElementsByClassName("screen")[0].value=result
}