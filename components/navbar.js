import {navbar} from "./nav.js";
let nav = document.querySelector("header")
nav.innerHTML= navbar();

import {fote} from "./fot.js";
let fot = document.querySelector("#footer")
fot.innerHTML= fote();

document.getElementById("logoutbtn").addEventListener("click",()=>{
  if(document.getElementById("logoutbtn").innerText=="Logout"){
    localStorage.clear();
    window.location.reload();
  }
})


window.addEventListener("scroll",()=>{
    let nav=document.querySelector(".navbar");
    let position=window.scrollY>0;
    nav.classList.toggle("afterscroll", position);
})

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click",function(e) {
  const ul = document.querySelector('header  ul');
  ul.classList.toggle('menu-slide');
  hamburger.classList.toggle("cross")
})

async function getUserData(){
  let token =JSON.parse(localStorage.getItem("token")); 
  console.log(token.username,token.tok);

  let url1 = `https://masai-api-mocker.herokuapp.com/user/${token.username}`
  try{
      let response = await fetch(url1,{
          headers:{
              "Authorization": `Bearer ${token.tok}`
          }
      })
  
      let data = await response.json();
      console.log(data)
      localStorage.setItem("userData",JSON.stringify(data))
      // alert(`${token.username}, Logged in Successfuly`)
      nav.innerHTML= navbar();
  }catch(err){
      // alert("error")
   
  } 
}


window.onload = function(){
  if(JSON.parse(localStorage.getItem("token"))){
      getUserData();
  }
}