const list = document.querySelector(".list");

const names = [
  "Perl",
  "Haskell",
  "Scala",
  "Elixir",
  "Lua",
  "Dart",
  "COBOL",
  "F#",
  "Ada",
  "Lisp",
];

let namesAdded = 0;

list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    const randomColor = getRandomColor();
    switch (e.target.innerText) {
      case "JavaScript":
        e.target.style.backgroundColor = randomColor;
        break;
      case "Ruby":
        e.target.style.backgroundColor = randomColor;
        break;
      case "Go":
        e.target.style.backgroundColor = randomColor;
        break;
      case "Php":
        e.target.style.backgroundColor = randomColor;
        break;
      case "Python":
        e.target.style.backgroundColor = randomColor;
        break;
      default:
        e.target.style.backgroundColor = randomColor;
    }
  }
});

const addElement = () => {
  if (namesAdded < 5) {
    const randomName = names[Math.floor(Math.random() * names.length)];

    const newElement = document.createElement("li");
    newElement.textContent = randomName;
    list.appendChild(newElement);

    namesAdded++;
  }
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};
