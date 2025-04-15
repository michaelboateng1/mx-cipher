const lowerCaseArray = [
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
];

const upperCaseArray = [
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
];

const specialCharacters = [
  "(",
  ")",
  "_",
  "{",
  "[",
  ":",
  ";",
  '"',
  "]",
  "'",
  "\\",
  "|",
  ",",
  "}",
  ".",
  "/",
  "?",
  "~",
  "`",
];

const symbols = ["#", "^", "!", "$", ">", "@", "&", "*", "<", "=", "+", "%"];

const numbers = ["8", "0", "5", "7", "4", "2", "9", "3", "6", "1"];

function encrypt(message) {
  const messageInWords = message.split(" ");

  return messageInWords.map((word) => {
    const letters = word.split("");

    return letters
      .map((letter) => {
        if (lowerCaseArray.includes(letter)) {
          let increaseIndex = Number(lowerCaseArray.indexOf(letter)) - 1;

          if (increaseIndex < 0) {
            increaseIndex = 25;
          } else if (increaseIndex > 25) {
            increaseIndex = 0;
          }

          return letter.replace(letter, lowerCaseArray[increaseIndex]);
        } else if (specialCharacters.includes(letter)) {
          increaseIndex = Number(specialCharacters.indexOf(letter)) - 1;

          if (increaseIndex < 0) {
            increaseIndex = 18;
          } else if (increaseIndex > 18) {
            increaseIndex = 0;
          }

          return letter.replace(letter, specialCharacters[increaseIndex]);
        } else if (symbols.includes(letter)) {
          increaseIndex = Number(symbols.indexOf(letter)) - 1;

          if (increaseIndex < 0) {
            increaseIndex = 11;
          } else if (increaseIndex > 11) {
            increaseIndex = 0;
          }

          return letter.replace(letter, symbols[increaseIndex]);
        } else if (numbers.includes(letter)) {
          increaseIndex = Number(numbers.indexOf(letter)) - 1;

          if (increaseIndex < 0) {
            increaseIndex = 9;
          } else if (increaseIndex > 9) {
            increaseIndex = 0;
          }

          return letter.replace(letter, numbers[increaseIndex]);
        } else if (upperCaseArray.includes(letter)) {
          increaseIndex = Number(upperCaseArray.indexOf(letter)) - 1;

          if (increaseIndex < 0) {
            increaseIndex = 25;
          } else if (increaseIndex > 25) {
            increaseIndex = 0;
          }

          return letter.replace(letter, upperCaseArray[increaseIndex]);
        }
      })
      .join("");
  });
}

const en = encrypt("Hi my name is {Michael and I come from Ghana 123 @").join(
  " "
);
console.log({ Encrypt: en });

function decrypt(message) {
  const messageInWords = message.split(" ");

  return messageInWords.map((word) => {
    const letters = word.split("");

    return letters
      .map((letter) => {
        if (lowerCaseArray.includes(letter)) {
          let decreaseIndex = Number(lowerCaseArray.indexOf(letter)) + 1;

          if (decreaseIndex < 0) {
            decreaseIndex = 25;
          } else if (decreaseIndex > 25) {
            decreaseIndex = 0;
          }

          return letter.replace(letter, lowerCaseArray[decreaseIndex]);
        } else if (specialCharacters.includes(letter)) {
          decreaseIndex = Number(specialCharacters.indexOf(letter)) + 1;

          if (decreaseIndex < 0) {
            decreaseIndex = 18;
          } else if (decreaseIndex > 18) {
            decreaseIndex = 0;
          }

          return letter.replace(letter, specialCharacters[decreaseIndex]);
        } else if (symbols.includes(letter)) {
          decreaseIndex = Number(symbols.indexOf(letter)) + 1;

          if (decreaseIndex < 0) {
            decreaseIndex = 11;
          } else if (decreaseIndex > 11) {
            decreaseIndex = 0;
          }

          return letter.replace(letter, symbols[decreaseIndex]);
        } else if (numbers.includes(letter)) {
          decreaseIndex = Number(numbers.indexOf(letter)) + 1;

          if (decreaseIndex < 0) {
            decreaseIndex = 9;
          } else if (decreaseIndex > 9) {
            decreaseIndex = 0;
          }

          return letter.replace(letter, numbers[decreaseIndex]);
        } else if (upperCaseArray.includes(letter)) {
          decreaseIndex = Number(upperCaseArray.indexOf(letter)) + 1;

          if (decreaseIndex < 0) {
            decreaseIndex = 25;
          } else if (decreaseIndex > 25) {
            decreaseIndex = 0;
          }

          return letter.replace(letter, upperCaseArray[decreaseIndex]);
        }
      })
      .join("");
  });
}

const de = decrypt(en).join(" ");
console.log({ Decrypt: de });
console.log("new\n\n\n\n\n");

const ds = decrypt(
  decrypt("Hi my name is Loice and I come from ! Ghana \\@").join(" ")
).join(" ");
const aj = encrypt(encrypt(ds).join(" ")).join(" ");
console.log({ Decrypt: ds });
console.log({ Encrypt: aj });

// VARIABLES
const clearText = document.getElementById("clearText");
const encryptText = document.getElementById("encrypt");
const decryptText = document.getElementById("decrypt");
const originalText = document.getElementById("originalText");
const encryptedText = document.getElementById("encryptedText");

const numberOfEncryption = document.getElementById("numberOfEncryption");
const numberOfDecryption = document.getElementById("numberOfDecryption");
const addZero = "0";
let initialNumberOfEncrytion = 0;
let initialNumberOfDecrytion = 0;

// EVENTS
encryptText.addEventListener("click", () => {
  const encodedText = encrypt(clearText.value).join(" ");

  clearText.value = encodedText;

  encryptedText.innerText = encodedText;

  initialNumberOfEncrytion++;

  if (clearText.value === "") {
    initialNumberOfEncrytion = 0;
    numberOfEncryption.innerText = "00";
  }

  if (initialNumberOfEncrytion < 10) {
    initialNumberOfEncrytion = addZero + initialNumberOfEncrytion.toString();
  }

  numberOfEncryption.innerText = initialNumberOfEncrytion;
});

decryptText.addEventListener("click", () => {
  const decodedText = decrypt(clearText.value).join(" ");

  clearText.value = decodedText;

  encryptedText.innerText = decodedText;

  initialNumberOfDecrytion++;

  if (clearText.value === "") {
    initialNumberOfDecrytion = 0;
    numberOfDecryption.innerText = "00";
  }

  if (initialNumberOfDecrytion < 10) {
    initialNumberOfDecrytion = addZero + initialNumberOfDecrytion.toString();
  }

  numberOfDecryption.innerText = initialNumberOfDecrytion;
});

clearText.addEventListener("input", (e) => {
  e.preventDefault();

  const clearTextValue = clearText.value;

  originalText.innerText = clearTextValue;

  if (clearText.value === "") {
    encryptedText.innerText = "";
    initialNumberOfEncrytion = 0;
    initialNumberOfDecrytion = 0;
    numberOfDecryption.innerText = "00";
    numberOfEncryption.innerText = "00";
  }
});
