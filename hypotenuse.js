const inputs=document.querySelectorAll(".side-input")
const output=document.querySelector("#output")
const btnCalculate=document.querySelector("#btn-calculate")

function hypo(a,b){

    if(a<=0 || b<=0){
        return "please enter valid Length"
    }
       const   hypoLength=a*a+b*b;
       return hypoLength;

}


function calculateHypo(){
    const hypoLength=hypo(parseInt(inputs[0].value),parseInt(inputs[1].value))
    output.innerText=hypoLength;

}


btnCalculate.addEventListener("click",calculateHypo)
// console.log("working")