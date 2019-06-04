const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const ballSize = 20;
let ballX = cw/2-ballSize/2;
let ballY = ch/2-ballSize/2;

const paddleHeight = 100;
const paddleWitdht = 20;

const playerX = 30;
const aiX = 940;

let playerY = ch/2 - paddleHeight/2;
let aiY = playerY;

const lineWidth = 6;
const lineHeight = 16;

let ballSpeedX = 3;
let ballSpeedY = 3;

let topCanvas = canvas.offsetTop;
console.log(topCanvas);

// draw a table
function table() {
    ctx.fillStyle = 'rgb(0, 172, 0)';
    ctx.fillRect(0,0,cw,ch)
    for (let linePosition = 20; linePosition < ch; linePosition += 30){
        ctx.fillStyle = 'gray';
        ctx.fillRect(cw / 2 - lineWidth / 2, linePosition, lineWidth, lineHeight);
    }
}

//draw the square ball
function ball() {
    ctx.fillStyle = 'white';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if ( ballY <= 0 || ballY + ballSize >= ch ){
        ballSpeedY = -ballSpeedY;
    }
    if ( ballX <= 0 || ballX + ballSize >= cw ){
        ballSpeedX = -ballSpeedX;
    }
 }

// draw the ball
// function ball() {
//     ctx.beginPath();
//     ctx.arc(ballX, ballY, ballSize, 0, Math.PI*2, true);
//     ctx.fillStyle = "yellow";
//     ctx.fill(); 
    //ctx.lineWidth = 5;  //error const lineWidth = 6; in line 23. 
    //ctx.strokeStyle = "red";
    //ctx.stroke();
//}

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

function playerPosition(e) {
    //console.log(`Pozycja myszy to ${e.clientY - topCanvas}`)
    playerY = e.clientY - topCanvas - paddleHeight/2;
    if (playerY >= ch - paddleHeight){
        playerY = ch - paddleHeight
    }
    if (playerY <= 0) {
        playerY = 0;
    }
}

canvas.addEventListener('mousemove', playerPosition)

// draw all funcion
function start() {
    table();
    player();
    ai();
    ball();
    //setInterval(ball, 60);
}

setInterval(start, 25);
//start();