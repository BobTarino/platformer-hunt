// wrap main javascript file in a load listener to make sure code doesn't execute until doc is finished loading and I have access to all of my classes
window.addEventListener("load", function(event) {

    "use strict";
    
    // render and update functions
    // called on every frame of game loop
    const render = function() {
        
        display.renderColor(game.color);
        display.render();
    }

    const update = function() {
        // tells game to change color value
        game.update();

    }

    // game objects (defined sections) and engine

    // controller handles user input
    const controller = new Controller();
    // display handles window resizing, as well as on screen canvas
    const display = new Display(document.querySelector("canvas"));
    // game variable will hold game logic
    const game = new Game();
    // engine is where the above three components can interact
    // runs at 30 frames per sec, and passes through render and update function, until we stop engine
    const engine = new Engine(1000/30, render, update);


    // initialize & instantiate 
    window.addEventListener("resize", display.handleResize);
    window.addEventListener("keydown", controller.handleKeyDownUp);
    window.addEventListener("keyup", controller.handleKeyDownUp);

    display.resize();
    engine.start();

});