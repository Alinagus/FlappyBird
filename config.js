const cvs = document.getElementById("canvas");  
const ctx = cvs.getContext("2d");
const sprite = new Image();
sprite.src = "./image/sprite.png";
let frames = 0;
const DEGREE = Math.PI/180;

class getBackground{
constructor(){ 
    this.sX = 0;
    this.sY = 0;
    this.w = 275;
    this.h = 226;
    this.x = 0;
    this.y = 254
};
    
draw = function(){
ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h); 
ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
}};

class getUnderground{
    constructor(){
        this.sX = 276,
        this.sY = 0,
        this.w = 224,
        this.h = 112,
        this.x = 0,
        this.y = 368,
        this.dx = 2;
}
draw = function(){
ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
};  
update = function(){
if(state.current === state.startGame){
this.x = (this.x - this.dx)%(this.w/2);
}
}
};

class Ready {
    constructor(){
    this.sX = 0,
    this.sY = 228,
    this.w = 173,
    this.h = 152,
    this.x = 84,
    this.y = 80
}
    
draw = function(){
if(state.current === state.ready){
ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
}
}   
}

class GameOver{
    constructor(){
        this.sX = 175;
        this.sY = 228;
        this.w = 225;
        this.h = 202;
        this.x = 58;
        this.y = 90;
    }
    
    draw = function(){
    if(state.current === state.gameOver){
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);}
    }
};


const background = new getBackground();
const underground = new getUnderground();
const getReady = new Ready();
const gameOver = new GameOver();


function draw(){
ctx.fillStyle = "#48b6c2";
ctx.fillRect(0, 0, 340, 480);
background.draw();
pipes.draw();
underground.draw();
bird.draw();
getReady.draw();
gameOver.draw();
score.draw(ctx);
}

function update(){
bird.update();
underground.update();
pipes.update();
}

function loop(){
update();
draw();
frames++;
requestAnimationFrame(loop);
}
sprite.onload = function() {
loop(); 
};

