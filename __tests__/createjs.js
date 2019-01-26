/**
 * CreateJS tests
 */
const { Stage, Shape } = require("@createjs/easeljs");

describe("CreateJS", () => {
  let canvas = document.createElement("canvas"), stage;
  canvas.width = 1280;
  canvas.height = 720;

  test("create Stage", () => {
    stage = new Stage(canvas);
    expect(stage).toBeTruthy();
  });

  test("draw something on Stage", () => {
    const before = canvas.toDataURL();
    const shape = new Shape();
    shape.graphics
      .setStrokeStyle(1)
      .beginStroke("#000")
      .moveTo(0, 0)
      .lineTo(canvas.width, canvas.height);
    stage.addChild(shape);
    stage.update();
    const after = canvas.toDataURL();
    expect(before).not.toEqual(after);
  });
});
