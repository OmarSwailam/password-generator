const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

password1El = document.getElementById("password-1");
password2El = document.getElementById("password-2");

function generate() {
  let password1 = "";
  let password2 = "";
  for (let i = 0; i < 15; i++) {
    let randomNumber = Math.floor(Math.random() * 91);
    password1 += characters[randomNumber];
  }
  for (let i = 0; i < 15; i++) {
    let randomNumber = Math.floor(Math.random() * 91);
    password2 += characters[randomNumber];
  }
  password1El.innerText = password1;
  password2El.innerText = password2;
}

function copy(event) {
  const textToCopy = event.target.innerText;
  // the clipboard api not working unless it's a secure/https connection
  // navigator.clipboard.writeText(textToCopy);
  // this method creates a text area and copy the text from it and then removes it
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  // make it hidden
  textArea.style.opacity = "0";
  textArea.style.position = "fixed";
  // adding the text area to the html doc
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand("copy");
  // removing the text area from the html doc
  document.body.removeChild(textArea);

  event.target.style.cursor = 'url("./images/copied.png"), auto';
  event.target.addEventListener("mouseleave", () => {
    event.target.style.cursor = 'url("./images/copy.png"), auto';
  });
}

password1El.addEventListener("click", copy);
password2El.addEventListener("click", copy);
