const colors = ["green", "red", "violet","#f15025","yellow","blue"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click',function(){
    const randomNumber = getRandomNumber();
    document.body.style.background = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}

// Get Hex Number --->

const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const btn2 = document.getElementById('btn-2');
const color2 = document.querySelector(".color");

btn2.addEventListener('click',function(){
    let hexColor = "#";
    for(let i = 0; i<6;i++){
        hexColor += hex[getRandomNumber2()];
    }

    color2.textContent = hexColor;
    document.body.style.background = hexColor;
});

function getRandomNumber2(){
    return Math.floor(Math.random()*hex.length);
}