const GRID_SIZE = 20;
const draw_apple = (ctx, apple, snakeBody, canvas) => {
  snakeBody.forEach(({ body_position_x, body_position_y }) => {
    if (apple.x === body_position_x && apple.y === body_position_y) {
      get_random_apple_position(apple, canvas);
    } else {
      ctx.fillStyle = "red";
      ctx.strokeStyle = "red";
      ctx.beginPath();
      ctx.arc(
        apple.x + GRID_SIZE / 2,
        apple.y + GRID_SIZE / 2,
        GRID_SIZE / 2,
        0,
        2 * Math.PI,
        true
      );
      ctx.stroke();
      ctx.fill();
    }
  });
};

const get_random_apple_position = (apple, canvas) => {
  apple.x = Math.floor(Math.random() * (canvas.width / GRID_SIZE)) * GRID_SIZE;
  apple.y = Math.floor(Math.random() * (canvas.height / GRID_SIZE)) * GRID_SIZE;
  if (
    apple.x < GRID_SIZE ||
    apple.x === canvas.width - GRID_SIZE ||
    apple.y < GRID_SIZE ||
    apple.y === canvas.height - GRID_SIZE
  ) {
    get_random_apple_position(apple, canvas);
  }
};

export { draw_apple, get_random_apple_position };
