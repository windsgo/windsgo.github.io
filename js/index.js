require("@/utils/live2dcubismcore.min");

import * as PIXI from "pixi.js";

window.PIXI = PIXI; // 全局
const { Live2DModel, Cubism2ModelSettings } = require("pixi-live2d-display");

export async function main() {
  const app = new PIXI.Application({
    view: document.getElementById("canvas_view"),

    autoStart: true,

    width: 280,

    height: 300,

    transparent: true, // 画布透明
  });

  const model = await Live2DModel.from(
    "/live2d/huli0622/huli0622.model3.json"
  );

  app.stage.addChild(model);

  app.renderer.backgroundColor = 0x061639; // 设置画布背景颜色 // transforms 模型方位 // model.x = -10 // 方位（单位像素） // model.y = 100 // model.rotation = Math.PI // model.skew.x = Math.PI

  model.scale.set(0.15); // model.scale.set(0.3, 0.3) // 缩放

  model.anchor.set(0.15, 0); // 锚点，以画布中心下方为中心点,x，y（单位：倍） // interaction

  model.on("hit", (hitAreas) => {
    // if (hitAreas.includes('body')) {
    //   model.motion('tap_body')
    // }
  });
}
