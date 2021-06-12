# Etch a Sketch

## Context

This is a project of the Foundations path of [The Odin Project](https://www.theodinproject.com/home)

## New knowledge

Random colors with javascript

## Difficulties

Random colors and grid subdivision settings

## Bugs

I use this to set up the board :

```javascript
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
```

```css
section#board {
  width: 600px;
  height: 600px;
  border: 2px solid gray;
  background-color: white;
  overflow: hidden;
}
```

It works very well until number get some values like 64.
In this case, an overflow appears. I use the next code to fix it.

```css
section#board {
  overflow: hidden;
}
```

I want to solve this without using overflow property.

## Languages

HTML, CSS, JAVASCRIPT

## Live preview

[Here]()
