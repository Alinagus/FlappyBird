class getState{
    constructor(){
        this.current = 0,
        this.ready = 0;
        this.startGame = 1;
        this.gameOver = 2
        this.x = 120;
        this.y = 263;
        this.w = 83;
        this.h = 29
    }};
    const state = new getState();
    
    canvas.addEventListener("click", function(event){
    switch(state.current){
    case state.ready: state.current = state.startGame;
    SWOOSHING.play();
    break;
    
    case state.startGame: if(bird.y - bird.radius <= 0) return;
    bird.flap();
    flapping.play();
    break;
    
    case state.gameOver:
    let rect = cvs.getBoundingClientRect();
    let clickX = event.clientX - rect.left;
    let clickY = event.clientY - rect.top;
                
    if(clickX >= state.x && 
    clickX <= state.x + state.w &&
    clickY >= state.y && 
    clickY <= state.y + state.h){
    pipes.reset();
    bird.speedReset();
    score.reset();
    state.current = state.ready;
    }
    break;
    }
    });

