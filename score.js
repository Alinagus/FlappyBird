class getScore  {
    constructor(){
        this.best = parseInt(localStorage.getItem("best")) || 0;
        this.gameScore = 0}
    
    draw = function(){  
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ffffff';
            
    if(state.current == state.startGame){
        ctx.lineWidth = 2;
        ctx.font = "25px YesevaOne";
        ctx.fillText(this.gameScore, 170, 50);
    ctx.strokeText(this.gameScore, 170, 50);
    }
    else if(state.current == state.gameOver){
        ctx.font = "20px YesevaOne";
        ctx.fillText(this.gameScore, 225, 186);
        ctx.strokeText(this.gameScore, 225, 186);
        ctx.fillText(this.best, 225, 228);
        ctx.strokeText(this.best, 225, 228);
    }
    };
    reset = function(){
        this.gameScore = 0;
    }
}

const score = new getScore();


