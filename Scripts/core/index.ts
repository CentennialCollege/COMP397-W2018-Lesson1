// IIFE -- Immediately Invoked Function Expression
(function(){

  // Game Variables
  let canvas = document.getElementById("canvas");
  let stage: createjs.Stage;
  let helloLabel: createjs.Text;


function Init():void {
  console.log("Initialization Started");
  Start();
}

function Start():void {
  stage = new createjs.Stage(canvas);
  createjs.Ticker.framerate = 60; // 60 fps
  createjs.Ticker.on("tick", Update); // call update every frame
  Main();
}

function Update():void {
  helloLabel.rotation += 5;
  stage.update();
}

function Main():void {
  console.log("Game Started...");

  helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
  helloLabel.x = 100;
  helloLabel.y = 100;

  stage.addChild(helloLabel);
}

window.onload = Init;


})();
