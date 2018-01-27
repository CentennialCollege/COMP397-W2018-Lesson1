// IIFE -- Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    function Init() {
        console.log("Initialization Started");
        Start();
    }
    function Start() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 fps
        createjs.Ticker.on("tick", Update); // call update every frame
        Main();
    }
    function Update() {
        helloLabel.rotation += 5;
        stage.update();
    }
    function Main() {
        console.log("Game Started...");
        helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=index.js.map