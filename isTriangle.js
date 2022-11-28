const inputAngle = document.querySelectorAll(".input-angle");

const btnCheck = document.querySelector("#btn-check");

const showingOutput = document.querySelector("#showing-output");



function checkTriangle() {

  let sumofAngles = 0;
  for (let i = 0; i < inputAngle.length; i++) {
    sumofAngles+=parseInt(inputAngle[i].value)
  }
if(inputAngle[0].value<=0 ||inputAngle[1].value<=0 ||inputAngle[2].value<=0 ){
  showingOutput.innerHTML="Triangle cannot be zero or negative."}
else if(sumofAngles===180){
    showingOutput.innerText="It is a Triangle";
}else{
    showingOutput.innerHTML="Not a Triangle."
}
  }


btnCheck.addEventListener("click", checkTriangle);
