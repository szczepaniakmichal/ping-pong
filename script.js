const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 15;
let ballX = cw/2-ballSize/2;
let ballY = ch/2-ballSize/2;

const paddleHeight = 100;
const paddleWitdht = 20;

const playerX = 30;
const aiX = 940;

let playerY = 200;
let aiY = playerY;

// draw a table
function table() {
    ctx.fillStyle = 'rgb(0, 255, 0, 0.767)';
    ctx.fillRect(0,0,cw,ch)
}

// draw the square ball
// function ball() {
//     ctx.fillStyle = 'white';
//     ctx.fillRect(ballX, ballY, ballSize, ballSize);
// }

// draw the ball
function ball() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize, ballSize, Math.PI*2, true);
    ctx.fillStyle = "blue";
    ctx.fill(); 
    //ctx.lineWidth = 5;
    //ctx.strokeStyle = "red";
    ctx.stroke();
}

// draw a player
function player() {
    ctx.fillStyle = 'white';
    ctx.fillRect(playerX, playerY, paddleWitdht, paddleHeight);
}
   
// draw a ai
function ai() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(aiX, aiY, paddleWitdht, paddleHeight);
}

// draw all funcion
function start() {
    table();
    
    player();
    ai();
    ball();
}

start();