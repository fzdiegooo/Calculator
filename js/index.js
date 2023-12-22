const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const contentButtons = document.querySelectorAll("i");
const checkbox = document.getElementById("mode");
const calculatorContainer = document.getElementById("calculator-container");
const screenContainer = document.getElementById("display");
const acButtons = document.querySelectorAll(".ac-button");

checkbox.addEventListener('change', function () {
    if(checkbox.checked){
        buttons.forEach((btn)=>{
            btn.style.backgroundColor='#f1b3be';
            btn.style.boxShadow='0 0 3px #ffced9';
        });
        
        contentButtons.forEach((icon) =>{
            icon.style.color='#fff';
        });
        screenContainer.style.borderColor='#f1b3be';
        screenContainer.style.backgroundColor="#ffdbe6"
        screenContainer.style.color="#f1b3be";
        document.body.style.backgroundColor='#ffdbe6'
        calculatorContainer.style.boxShadow='0px 0px 25px -6px #d598a3'
        calculatorContainer.style.backgroundColor='#ffced9';
    } else {
        buttons.forEach((btn)=>{
            btn.style.backgroundColor='aliceblue';
            btn.style.boxShadow='0 0 3px black';
        });
        acButtons.forEach((btn) =>{
            btn.style.backgroundColor='rgb(255, 136, 0)';
        });
        contentButtons.forEach((icon) =>{
            icon.style.color='black';
        });
        screenContainer.style.borderColor='black';
        screenContainer.style.backgroundColor="rgb(171, 204, 171)"
        screenContainer.style.color="black";
        document.body.style.backgroundColor='indianred'
        calculatorContainer.style.boxShadow='0px 0px 25px -6px black'
        calculatorContainer.style.backgroundColor='rgb(64, 70, 81)';
    }
  });



buttons.forEach((btn) =>{
    btn.addEventListener("click",() =>{
        const botonApretado = btn.id;
        var ultimoDigito = display.textContent.charAt(display.textContent.length - 1);

        if(botonApretado === "ac"){
            display.textContent = "0";
            return
        }

        if(botonApretado === "c"){
            if(display.textContent.length === 1){
                display.textContent= "0";
            }else{
                display.textContent = display.textContent.slice(0,-1);
            }
            return;
        }

        if(botonApretado === "+" || botonApretado === "-" ||botonApretado === "*" ||botonApretado === "/" ||botonApretado === "." ||botonApretado === "^" ||botonApretado==="%" ){
            if(display.textContent.length=1 && display.textContent==="0"){
                display.textContent="0";
                return;
            }else if(ultimoDigito === "+" || ultimoDigito === "-" || ultimoDigito === "*" || ultimoDigito === "/" || ultimoDigito === "."||botonApretado === "^" ||botonApretado==="%"){
                botonApretado="";
                return;
            }
        }

        if(botonApretado === "igual"){
            display.textContent = eval(display.textContent);
            return;
        }

        if(display.textContent === "0"){
            display.textContent = botonApretado;
        }else{
            display.textContent += botonApretado;
        }
    })
})