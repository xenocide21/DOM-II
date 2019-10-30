// Your code goes here

//-1-Show Date and Time---------------------------------------------------------------------
document.getElementById("newBtn").addEventListener("click", displayDate);  //
function displayDate() {                                                                  //
    document.getElementById("date").innerHTML = Date();                         //
}                                                                                        //
//-----------------------------------------------------------------------------------------

//-2-Alert on mouse over-----------------------------------------------------------------------------------------------------------------
const x = document.getElementById("head-img");                                                                               //
x.addEventListener("mouseover", alertFunction);                                                                                  //
                                                                                                                                      //
function alertFunction() {                                                                                                            //
    alert('Warning, your mouse has moved, You must restart your computer for the changes to take effect. Press "ok" to restart now'); //
}                                                                                                                                     //
//--------------------------------------------------------------------------------------------------------------------------------------

//-3-Mouse over/leave style change-------------------------------------------------
document.querySelectorAll(".p-text").forEach(tag => {         //
    tag.addEventListener("mouseenter", () => {                     //
        tag.style.color = "red"                                                 //
    });                                                                         //
    tag.addEventListener("mouseleave", () => {                    //
        tag.style.color = "grey"                                              //
    });                                                                        //
});                                                                            //
document.querySelectorAll(".p-text-2").forEach(tag => {     //
    tag.addEventListener("mouseenter", () => {                   //
        tag.style.color = "blue"                                              //
    });                                                                       //
    tag.addEventListener("mouseleave", () => {                  //
        tag.style.color = "grey"                                            //
    });                                                                      //
});                                                                          //
//------------------------------------------------------------------------------

//-4-Dblclick img src change---------------------------------------
const changeImg = document.querySelector(".adv-img");   //
changeImg.addEventListener("dblclick", () => {     //
    changeImg.src = "img/scary.jpg";                            //
});                                                             //
//----------------------------------------------------------------

//-5-keypress redirect-------------------------------------
window.addEventListener("keypress", c =>    //
    window.location.href = "centipede.html"              //
);                                                       //
//---------------------------------------------------------

//-6-play sound on click -----------------------------------------------------------------
document.querySelector(".dest-pic").addEventListener("click", playSound); //
const s = document.getElementById("mySound");                                  //
function playSound() {                                                                  //
    s.play();                                                                           //
}                                                                                       //
//----------------------------------------------------------------------------------------

//-7-Stop Propegation----------------------------------------------------------
const body = document.querySelector("body");                        //
body.addEventListener("click", (a) =>{                         //
    body.style.backgroundColor="black";                                     //
    body.style.color="orange";                                              //
    a.stopPropagation();                                                    //
});                                                                         //
const textContent = document.querySelector(".content-section");    //
textContent.addEventListener("click", (a) =>{                 //
    textContent.style.backgroundColor="orange";                            //
    textContent.style.color="black";                                       //
    a.stopPropagation();                                                   //
});                                                                        //
//---------------------------------------------------------------------------

//-8-prevent default--------------------------------------------
const stopRedirect = document.querySelector(".au");  //
stopRedirect.addEventListener("click", (a) =>{  //
    a.preventDefault();                                      //
    a.stopPropagation()                                      //
});                                                          //
//-------------------------------------------------------------

//-9-stop propegation on links-------------------------
const nav = document.querySelector("nav");  //
nav.addEventListener("click", (a) =>{  //
    a.stopPropagation()                             //
});                                                 //
//----------------------------------------------------

//-10-change font size on resize-----------------------
const resize = document.querySelector('body');
window.addEventListener('resize', () =>{
    body.style.fontSize='55px';
    });