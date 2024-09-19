let toggler = document.getElementById('switch');
let message = document.getElementById('message');

toggler.addEventListener("click", () => {
    if (toggler.checked === true) { 
        document.body.style.backgroundColor = "black";
        message.style.color = "white"; 
        message.textContent = "VOCÊ É GAY ";
   
    } else {
        document.body.style.backgroundColor = "white";
        message.style.color = "black"; 
        message.textContent = "APERTE O BOTÃO";
        }
});
