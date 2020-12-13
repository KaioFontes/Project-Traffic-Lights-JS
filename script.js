//Traffics Lights

const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLights = (event) =>{
    stopAuto()
    turnOn[event.target.id]();
    
}   

const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor,1000),
    'off':() => img.src = 'img/desligado.png'
}

const nextIndex = () =>{
    if(colorIndex < 2){
        colorIndex++;
    }else{
        colorIndex = 0;
    }
}

const stopAuto = () =>{
    clearInterval(intervalId);
}


const changeColor = () =>{
    const colors = ['red','yellow','green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

buttons.addEventListener('click', trafficLights);