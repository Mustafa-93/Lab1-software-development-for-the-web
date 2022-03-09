const GRID_SIZE = 20;

let snake_position_x = 200;
let snake_position_y = 200;
class SnakeBodySegment {
  constructor(body_position_x, body_position_y, GRID_SIZE) {
    this.body_position_x = body_position_x;
    this.body_position_y = body_position_y;
    this.width = GRID_SIZE;
    this.height = GRID_SIZE;
  }
}

const buildBody = (snakeBody, snake_position) => {
  const snakeSegment = new SnakeBodySegment(
    snake_position.x_position,
    snake_position.y_position,
    GRID_SIZE
  );
  return snakeBody.unshift(snakeSegment);
};

const draw_body = (ctx, snake, snake_body, snake_position) => {
  buildBody(snake_body, snake_position);
  snake_body.forEach((elem) => {
    ctx.fillStyle = "rgb(221, 161, 94)";
    ctx.fillRect(
      elem.body_position_x,
      elem.body_position_y,
      elem.width,
      elem.height
    );
    ctx.strokeStyle = "rgb(241, 201, 114)";
    ctx.lineWidth = 1;
    ctx.strokeRect(
      elem.body_position_x,
      elem.body_position_y,
      elem.width,
      elem.height
    );
  });
  if (snake_body.length > snake.length) snake_body.pop();
};

const draw_head = (ctx, snake, snake_body, snake_position) => {
  if (
    snake_position.x_position % GRID_SIZE === 0 &&
    snake_position.y_position % GRID_SIZE === 0
  ) {
    getDirection(snake);
  }
  ctx.fillStyle = "rgb(221, 161, 94)";
  ctx.fillRect(
    (snake_position.x_position += snake.speed * snake.direction_x),
    (snake_position.y_position += snake.speed * snake.direction_y),
    GRID_SIZE,
    GRID_SIZE
  );
  ctx.strokeStyle = "rgb(241, 201, 114)";
  ctx.lineWidth = 1;

  ctx.strokeRect(snake_position_x, snake_position_y, GRID_SIZE, GRID_SIZE);
};

const getDirection = (snake) => {
  window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        snake.direction_x = 0;
        if (snake.direction_y === 1) {
          return;
        } else snake.direction_y = -1;
        break;
      case "ArrowDown":
        snake.direction_x = 0;
        if (snake.direction_y === -1) {
          return;
        } else snake.direction_y = 1;
        break;
      case "ArrowLeft":
        snake.direction_y = 0;
        if (snake.direction_x === 1) {
          return;
        } else snake.direction_x = -1;
        break;
      case "ArrowRight":
        snake.direction_y = 0;
        if (snake.direction_x === -1) {
          return;
        } else snake.direction_x = 1;
        break;
      default:
        console.log("Ignored");
        break;
    }
  });
};

export { draw_body, draw_head };
