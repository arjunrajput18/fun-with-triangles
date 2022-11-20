const triangleBase=document.querySelector("#triangle-base");
const triangleHeight=document.querySelector("#triangle-height");
const btnCalculate=document.querySelector("#btn-calculate")
const output=document.querySelector("#output")

function funCalculate(a,b){
    if(a<=0 || b<=0){
        return "Please enter valid Length";
    }
    let calculate=(a*b)/2
    return `area of Triangle is ${calculate}`;;
}

function calculateArea(){
    // console.log(typeof parseInt(triangleBase.value))
    // console.log(triangleHeight.value)
    const areaTriangle=funCalculate(parseInt(triangleBase.value),parseInt(triangleHeight.value))
    
    output.innerText=areaTriangle;
   
}


btnCalculate.addEventListener("click",calculateArea)