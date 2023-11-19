// alert("loading");
function addNewWEField() {
    // console.log("adding new field");
let newNode = document.createElement('textarea')
newNode.classList.add( 'form-control');
newNode.classList.add( 'wefield');
newNode.classList.add("mt-3");
newNode.setAttribute('placeholder', 'Enter Here')
newNode.setAttribute("rows" , 3);

let weOb = document.getElementById("we");
let weAddButtonOb = document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    // console.log("adding new field");
let newNode = document.createElement('textarea')
newNode.classList.add( 'form-control');
newNode.classList.add( "aqField");
newNode.classList.add("mt-3");
newNode.setAttribute('placeholder', 'Enter Here')
newNode.setAttribute("rows" , 3);

let aqOb = document.getElementById("aq");
let aqAddButtonOb = document.getElementById("aqAddButton");

aqOb.insertBefore(newNode, aqAddButtonOb);
}


function generateCV() {
    // Get the value from the input field
    let nameField = document.getElementById("nameField").value;

   let nameT1 = document.getElementById("nameT1");
   nameT1.innerHTML=nameField;
   document.getElementById("nameT2").innerHTML = nameField;
document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
document.getElementById("addressT").innerHTML=document.getElementById("AddressField").value;
document.getElementById("googleT").innerHTML=document.getElementById("facebookField").value;

document.getElementById("LT").innerHTML=document.getElementById("LinkdinField").value;

document.getElementById("githubT").innerHTML=document.getElementById("githubField").value;
document.getElementById("objectiveT").innerHTML=document.getElementById("ObjectiveField").value;


let wes=document.getElementsByClassName("weField");
let str=''
for(let e of wes)
{
    str = str+`<li> ${e.value} </li>`
}
document.getElementById("weT").innerHTML=str;
let aqs=document.getElementsByClassName('eqField');
let str1="";

for(let e of aqs)
{
    str1 = str1+`<li> ${e.value} </li>`
}
document.getElementById("aqT").innerHTML=str1;

document.getElementById("cv-form").style.display='none';

document.getElementById("cv-template").style.display='block';
}


function printCV()
{
    window.print();
}
