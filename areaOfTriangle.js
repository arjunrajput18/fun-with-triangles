const triangleBase=document.querySelector("#triangle-base");
const triangleHeight=document.querySelector("#triangle-height");
const btnCalculate=document.querySelector("#btn-calculate")
const output=document.querySelector("#output")

function funCalculate(a,b){
    let calculate=(a*b)/2
    return calculate;
}

function calculateArea(){
    // console.log(typeof parseInt(triangleBase.value))
    // console.log(triangleHeight.value)
    const areaTriangle=funCalculate(parseInt(triangleBase.value),parseInt(triangleHeight.value))
    console.log(areaTriangle);
    output.innerText=areaTriangle;
   
}


btnCalculate.addEventListener("click",calculateArea)