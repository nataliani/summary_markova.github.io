function init(){
  document.getElementById("addEducation").onclick=handleButtonClick;
}

function handleButtonClick(){
    document.getElementById("dateStartEducation")=dateStartEducation.value;
    var li=document.createElement("li");
    li.innerHTML=dateStartEducationValue;
    var ul=document.getElementById("listEducation");
    ul.appendChild("li");
    alert ("star");
}