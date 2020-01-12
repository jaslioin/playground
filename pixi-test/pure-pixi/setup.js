import keyboard from "./keyboard.js";
export default function setup(app) {
  /** load single sprite */
  // app.loader
  //   .add("sprite", "../src/assets/images/spirtes/hero.png")
  //   .load((loader, resources) => {
  //     // This creates a texture from a 'bunny.png' image
  //     const sprite = new PIXI.Sprite(resources.sprite.texture);

  //     // Setup the position of the bunny
  //     sprite.x = app.renderer.width / 2;
  //     sprite.y = app.renderer.height / 2;

  //     // Rotate around the center
  //     sprite.anchor.x = 0.5;
  //     sprite.anchor.y = 0.5;
  //     sprite.width = 200;
  //     sprite.height = 200;
  //     // Add the bunny to the scene we are building
  //     app.stage.addChild(sprite);

  //     // Listen for frame updates
  //     app.ticker.add(() => {
  //       // each frame we spin the bunny around a bit
  //       sprite.width += 0.1;
  //       sprite.height += 0.1;
  //     });
  //   });

  /** load sprite map */
  app.loader
    .add("../src/assets/images/spirtes/iconset.png")
    .load((loader, resources) => {
      //Create the `tileset` sprite from the texture
      let texture =
        PIXI.utils.TextureCache["../src/assets/images/spirtes/iconset.png"];

      //Create a rectangle object that defines the position and size of the sub-image you want to extract from the texture
      let rectangle = new PIXI.Rectangle(0, 0, 32, 32);
      //Tell the texture to use that rectangular section
      texture.frame = rectangle;
      //Create the sprite from the texture
      let cropped = new PIXI.Sprite(texture);
      //Position the rocket sprite on the canvas
      cropped.x = 32;
      cropped.y = 32;

      cropped.vx = 0;
      cropped.vy = 0;
      //Add the rocket to the stage
      app.stage.addChild(cropped);

      //keyboard handlers
      //Capture the keyboard arrow keys
      let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);
      //Left arrow key `press` method
      left.press = () => {
        //Change the cropped's velocity when the key is pressed
        cropped.vx = -5;
        cropped.vy = 0;
      };
      //Left arrow key `release` method
      left.release = () => {
        //If the left arrow has been released, and the right arrow isn't down,
        //and the cropped isn't moving vertically:
        //Stop the cropped
        if (!right.isDown && cropped.vy === 0) {
          cropped.vx = 0;
        }
      };
      //Up
      up.press = () => {
        cropped.vy = -5;
        cropped.vx = 0;
      };
      up.release = () => {
        if (!down.isDown && cropped.vx === 0) {
          cropped.vy = 0;
        }
      };
      //Right
      right.press = () => {
        cropped.vx = 5;
        cropped.vy = 0;
      };
      right.release = () => {
        if (!left.isDown && cropped.vy === 0) {
          cropped.vx = 0;
        }
      };
      //Down
      down.press = () => {
        cropped.vy = 5;
        cropped.vx = 0;
      };
      down.release = () => {
        if (!up.isDown && cropped.vx === 0) {
          cropped.vy = 0;
        }
      };
      app.ticker.add(() => {
        cropped.x += cropped.vx;
        cropped.y += cropped.vy;
      });
    });
}
