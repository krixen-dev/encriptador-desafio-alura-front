const textUser = document.querySelector(".form__textarea");
const $buttonEncript = document.querySelector(".container__send--white");
const $buttonDecript = document.querySelector(".container__send--blue");
const $secretMessageCard = document.querySelector(".card__secret-message");

$buttonEncript.addEventListener("click", encript);
$buttonDecript.addEventListener("click", decript);

const showResults = text => $secretMessageCard.textContent = text;
const cleanInput = $input => $input.value = '';

let originalText = ''; // Almacena el texto original

function encript() {
  let newText = '';
  for (const word of textUser.value) {
    switch (word) {
      case 'a':
        newText += 'apa';
        break;
      case 'e':
        newText += 'epe';
        break;
      case 'i':
        newText += 'ipi';
        break;
      case 'o':
        newText += 'opo';
        break;
      case 'u':
        newText += 'upu';
        break;
      default:
        newText += word;
        break;
    }
  }
  originalText = textUser.value; // Almacena el texto original antes de limpiar
  cleanInput(textUser);
  return showResults(newText);
}

function decript() {
  cleanInput(textUser); // Limpia el input antes de desencriptar
  return showResults(originalText);
}
