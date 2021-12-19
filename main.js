let btn = document.querySelectorAll(".btn");
let op = document.querySelectorAll(".op");
let screen = document.querySelector(".monitor");
let ac = document.querySelector(".ac");
let eq = document.querySelector(".eq");
let obj = [];

btn.forEach(element => {
    element.addEventListener("click",()=>{
        console.log(element.innerHTML)
        screen.innerHTML += element.innerHTML;
    })
});


// eval function like

function evil(fn) {
    return new Function('return ' + fn)();
  }

op.forEach(element => {
    element.addEventListener("click",(e)=>{

        // if(screen.innerHTML == "") return;

        // if(screen.innerHTML.includes(element.innerHTML)) return

        // obj.push(screen.innerHTML);
        screen.textContent = screen.innerHTML += element.textContent;
        // screen.innerHTML = "";
    })
})



eq.addEventListener("click",(e)=>{
    if(screen.innerHTML == "") return;
   
    screen.innerHTML = screen.textContent.slice(0,-1);
    
    obj.push(screen.textContent)
    console.log(obj)
    // screen.innerHTML = "";

    screen.innerHTML = evil(obj);
})

ac.addEventListener("click",()=>{
   screen.innerHTML = screen.innerHTML.slice(0,0);
})

