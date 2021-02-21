function randomHEX_RGB(){
    var hex = randomRGB().toString(16); 
    if(hex.length%2>0) return "0"+hex;
    return hex;
}

function randomRGB(){
    return (Math.floor(Math.random()*256));
}

const buttonHEX = document.getElementById("change_btn1");
const buttonRGB = document.getElementById("change_btn2");
let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let color_div1 = document.querySelector(".color_indicator1");
let color_div2 = document.querySelector(".color_indicator2");

buttonHEX.addEventListener("click", function(){
    var newColor = '#'+ randomHEX_RGB() + randomHEX_RGB() + randomHEX_RGB();
    content1.style.backgroundColor = newColor;
    color_div1.textContent = newColor;
    color_div1.style.color = newColor;
    buttonHEX.style.color = newColor;
});

buttonRGB.addEventListener("click", function(){
    var newColor = 'rgb('+ randomRGB() +"," +randomRGB() +","+ randomRGB()+")";
    content2.style.backgroundColor = newColor;
    color_div2.textContent = newColor;
    color_div2.style.color = newColor;
    buttonRGB.style.color = newColor;
});

