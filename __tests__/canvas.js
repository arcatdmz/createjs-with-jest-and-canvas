/**
 * canvas-related tests
 */

 describe("canvas", () => {
  let canvas = document.createElement("canvas");

  test("create element", () => {
    canvas.width = 1280;
    canvas.height = 720;
    expect(canvas).toBeInstanceOf(HTMLCanvasElement);
  });

  test("convert to data url", () => {
    const url = canvas.toDataURL();
    expect(url).toBeTruthy();
    expect(url.length).toBeGreaterThan("image/png;base64,".length);
  });

  test("get context", () => {
    let ctx = null;
    try {
      ctx = canvas.getContext("2d")
    } catch (e) {}
    expect(ctx).not.toBeNull();
  });

  test("draw something", () => {
    const before = canvas.toDataURL();
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();
    ctx.stroke();
    const after = canvas.toDataURL();
    expect(before).not.toEqual(after);
  })
});
