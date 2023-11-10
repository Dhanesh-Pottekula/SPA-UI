function randomText(){
    const text="asdf,./!@#$%^&*()_+ghjklqwertyuiopasdfghjklq,./!@#$%^&*()_+wertyuiop[]'zxcvbnm,./!@#$%^&*()_+`1234567890";
    
    var letter=text[Math.floor(Math.random()*text.length)]
    return letter
}
function rain(){
    let cloud=document.querySelector(".cloud");
    let e=document.createElement("div");
    let left=Math.floor(Math.random() *310);
    let size=Math.floor(Math.random()*1.5);
    let duration = Math.random()*1

    e.classList.add("text");
    cloud.appendChild(e)
    e.innerText=randomText();
    e.style.left=left+"px";
    e.style.fontSize= 0.5 +size +"em";
    e.style.animationDuration=1+duration+"s";
    
    
    setTimeout(() => cloud.removeChild(e), 2000);
}


setInterval(function (){
    console.log("hi")
   return rain()
},20);