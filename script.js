const board = document.getElementById("board");
const blackBtn = document.getElementById("black");
const clearBtn = document.getElementById("clear");
const eraseBtn = document.getElementById("erase");
const randomBtn = document.getElementById("random");
const squareInput = document.getElementById("square");
const submitBtn = document.getElementById("submit");
let wide = 16;

function makeBoard(number) {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  for (let i = number ** 2; i > 0; i--) {
    const element = document.createElement("div");
    element.classList.add("element");
    element.setAttribute(
      "style",
      `width: ${600 / number}px; height: ${600 / number}px`
    );
    element.setAttribute("id", 0);
    board.appendChild(element);
  }

  board.setAttribute("style", "display: flex;  flex-wrap: wrap;");
  return 0;
}

function printer(background = "black") {
  makeBoard(wide);
  let elements = Array.from(document.getElementsByClassName("element"));
  elements.forEach(myFunction);

  blackBtn.addEventListener("click", function (e) {
    background = "black";
  });

  eraseBtn.addEventListener("click", function (e) {
    background = "white";
  });

  randomBtn.addEventListener("click", function (e) {
    const randomBetween = (min, max) =>
      min + Math.floor(Math.random() * (max - min + 1));
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    background = `rgb(${r},${g},${b})`;
  });

  function myFunction(item, index, arr) {
    arr[index].addEventListener("mousemove", function (e) {
      if (arr[index].id == 0 || background === "white") {
        arr[index].style.backgroundColor = `${background}`;
        if (background === "white") {
          arr[index].id = 0;
        } else {
          arr[index].id = 1;
        }
      }
    });

    clearBtn.addEventListener("click", function (e) {
      arr[index].style.backgroundColor = "white";
      arr[index].id = 0;
    });
  }
}

printer();

submitBtn.addEventListener("click", function (e) {
  wide = squareInput.value;
  if (wide < 16) {
    wide = 16;
  } else if (wide > 64) {
    wide = 64;
  }
  printer();
});
