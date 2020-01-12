import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as PIXI from "pixi.js";

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}
PIXI.utils.sayHello(type);
let app = new PIXI.Application({
  width: 500, // default: 800
  height: 500, // default: 600
  antialias: false, // default: false
  transparent: false, // default: false
  resolution: 1 // default: 1
});
document.getElementById("pixi").appendChild(app.view);

app.loader
  .add("cat", "./assets/images/spirtes/cat.png")
  .load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const cat = new PIXI.Sprite(resources.cat.texture);

    // Setup the position of the bunny
    cat.x = app.renderer.width / 2;
    cat.y = app.renderer.height / 2;

    // Rotate around the center
    cat.anchor.x = 0.5;
    cat.anchor.y = 0.5;

    // Add the bunny to the scene we are building
    app.stage.addChild(cat);

    // Listen for frame updates
    app.ticker.add(() => {
      // each frame we spin the bunny around a bit
      cat.rotation += 0.01;
    });
  });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
