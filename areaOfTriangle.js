const triangleBase=document.querySelector("#triangle-base");
const triangleHeight=document.querySelector("#triangle-height");
const btnCalculate=document.querySelector("#btn-calculate")
const output=document.querySelector("#output")

function calculateArea() {
    const b = Number(triangleBase.value);
    const h = Number(triangleHeight.value);
  
    if (b <= 0 || h <= 0) {
      output.style.color="red";
      output.innerText = "Please enter valid lengths!";
      return;
    }
  
    const areaOfTriangle = (b * h) / 2;
    output.style.color="#a21caf";

    output.innerText = `Area of Triangle is ${areaOfTriangle} square units`;
  }
  
  btnCalculate.addEventListener("click", calculateArea);
