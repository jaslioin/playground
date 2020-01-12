import setup from "./setup.js";

let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}
PIXI.utils.sayHello(type);

let app = new PIXI.Application({
  width: window.innerWidth - 200, // default: 800
  height: window.innerHeight - 200, // default: 600
  antialias: false, // default: false
  transparent: false, // default: false
  resolution: 1 // default: 1
});

document.getElementById("pixi").appendChild(app.view);

setup(app); // load sprite and setup
