const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const generateEl = document.getElementById("generate");

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  resultEl.innerText = generatePassword(length);
});

function generatePassword(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}