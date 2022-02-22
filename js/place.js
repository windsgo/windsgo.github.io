// const cubism4Model = "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/haru/haru_greeter_t03.model3.json";
  const cubism4Model = "/live2d/huli0622/huli0622.model3.json";
  const live2d = PIXI.live2d;

  (async function main() {
    const app = new PIXI.Application({
      view: document.getElementById("canvas"),
      autoStart: true,

      transparent: true, // 画布透明 
      resizeTo: window
    });

    const model = await PIXI.live2d.Live2DModel.from(cubism4Model);

    app.stage.addChild(model);
    
    // fit the window
    model.scale.set(0.15);
    model.anchor.set(0.25,0.05);

    //model.y = innerHeight * 0.05;
      

  })();

  // function draggable(model) {
  //   model.buttonMode = true;
  //   model.on("pointerdown", (e) => {
  //     model.dragging = true;
  //     model._pointerX = e.data.global.x - model.x;
  //     model._pointerY = e.data.global.y - model.y;
  //   });
  //   model.on("pointermove", (e) => {
  //     if (model.dragging) {
  //       model.position.x = e.data.global.x - model._pointerX;
  //       model.position.y = e.data.global.y - model._pointerY;
  //     }
  //   });
  //   model.on("pointerupoutside", () => (model.dragging = false));
  //   model.on("pointerup", () => (model.dragging = false));
    
  // }

  // function addFrame(model) {
  //   const foreground = PIXI.Sprite.from(PIXI.Texture.WHITE);
  //   foreground.width = model.internalModel.width;
  //   foreground.height = model.internalModel.height;
  //   foreground.alpha = 0.2;

  //   model.addChild(foreground);

  //   checkbox("Model Frames", (checked) => (foreground.visible = checked));
  // }

  // function addHitAreaFrames(model) {
  //   const hitAreaFrames = new live2d.HitAreaFrames();

  //   model.addChild(hitAreaFrames);

  //   checkbox("Hit Area Frames", (checked) => (hitAreaFrames.visible = checked));
  // }

  // function checkbox(name, onChange) {
  //   const id = name.replace(/\W/g, "").toLowerCase();

  //   let checkbox = document.getElementById(id);

  //   if (!checkbox) {
  //     const p = document.createElement("p");
  //     p.innerHTML = `<input type="checkbox" id="${id}"> <label for="${id}">${name}</label>`;

  //     document.getElementById("control").appendChild(p);
  //     checkbox = p.firstChild;
  //   }

  //   checkbox.addEventListener("change", () => {
  //     onChange(checkbox.checked);
  //   });

  //   onChange(checkbox.checked);
  // }