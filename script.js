
let seconds = 0;
let interval = null;

const timer = document.getElementById('timer');
const fill = document.getElementById('fill');
const pet = document.getElementById('pet');
const stage = document.getElementById('stage');

const forms = [
'characters/char1.png',
'characters/char2.png',
'characters/char3.png',
'characters/char4.png'
];

function update(){
seconds++;

const h = String(Math.floor(seconds/3600)).padStart(2,'0');
const m = String(Math.floor((seconds%3600)/60)).padStart(2,'0');
const s = String(seconds%60).padStart(2,'0');

timer.textContent = `${h}:${m}:${s}`;

fill.style.width = Math.min(seconds/60,100) + '%';

if(seconds >= 10800){
pet.src = forms[3];
stage.textContent = '🌟 Adult Stage';
}
else if(seconds >= 3600){
pet.src = forms[2];
stage.textContent = '✨ Teen Stage';
}
else if(seconds >= 600){
pet.src = forms[1];
stage.textContent = '💛 Baby Stage';
}

localStorage.setItem('seconds', seconds);
}

function startTimer(){
if(!interval){
interval = setInterval(update,1000);
}
}

function pauseTimer(){
clearInterval(interval);
interval = null;
}

function resetTimer(){
clearInterval(interval);
interval = null;
seconds = 0;
timer.textContent = '00:00:00';
fill.style.width = '0%';
pet.src = forms[0];
stage.textContent = '🥚 Egg Stage';
localStorage.removeItem('seconds');
}

window.onload = () => {
const save = localStorage.getItem('seconds');

if(save){
seconds = parseInt(save);

const h = String(Math.floor(seconds/3600)).padStart(2,'0');
const m = String(Math.floor((seconds%3600)/60)).padStart(2,'0');
const s = String(seconds%60).padStart(2,'0');

timer.textContent = `${h}:${m}:${s}`;
}
}
