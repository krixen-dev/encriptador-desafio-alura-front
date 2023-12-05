const textUser = document.querySelector(".form__textarea");
const btnSend = document.querySelector(".container__send");
const showMessage = document.querySelector(".card__secret-message");
const $buttonsContainer = document.querySelector("#buttons-container");
const $buttonDecript = document.querySelector("#button-decript");

btnSend.addEventListener("click", () => {
  console.log(textUser.value);
  showMessage.textContent = encript(textUser.value);
  showElement($buttonsContainer);
})

$buttonDecript.addEventListener("click", () => {
  let textEncripted = showMessage.textContent;
  const textDecript = desencript(textEncripted);
  console.log(desencript(textEncripted));
  console.log(textEncripted);
  showMessage.textContent = textDecript;
})

function encript(text) {
  let newText = '';
  for (const word of text) {
    switch (word) {
      case 'a':
        newText = newText + 'apa'
        break;
      case 'e':
        newText = newText + 'epe'
        break;
      case 'i':
        newText = newText + 'ipi'
        break;
      case 'o':
        newText = newText + 'opo'
        break;
      case 'u':
        newText = newText + 'upu'
        break;
      default:
        newText = newText + word;
        break;
    }
  }
  return newText;
}

function desencript(text) {
  let newText = '';
  let i = 0;

  while (i < text.length) {
    switch (text.substr(i, 3)) {
      case 'apa':
        newText += 'a';
        i += 3;
        break;
      case 'epe':
        newText += 'e';
        i += 3;
        break;
      case 'ipi':
        newText += 'i';
        i += 3;
        break;
      case 'opo':
        newText += 'o';
        i += 3;
        break;
      case 'upu':
        newText += 'u';
        i += 3;
        break;
      default:
        newText += text[i];
        i += 1;
        break;
    }
  }

  return newText;
}

function showElement($element) {
  $element.style.display = "block";
}



















// let textEncripted = '';
// let textDecripted = '';

// $buttonEncript.addEventListener("click", encript);
// $buttonDecript.addEventListener("click", decript);

// function encript() {
//   console.log(textUser.value);
//   $secretMessageCard.textContent = textUser.value;
//   textEncripted = textUser.value;
//   textUser.value = "";
// }

// function decript() {
//   console.log($secretMessageCard.textContent);
//   textDecripted = $secretMessageCard.textContent;
// }

// const showResults = text => $secretMessageCard.textContent = text;
// const cleanInput = $input => $input.value = '';

















// let originalText = ''; // Almacena el texto original

// function encript() {
//   let newText = '';
//   for (const word of textUser.value) {
//     switch (word) {
//       case 'a':
//         newText += 'apa';
//         break;
//       case 'e':
//         newText += 'epe';
//         break;
//       case 'i':
//         newText += 'ipi';
//         break;
//       case 'o':
//         newText += 'opo';
//         break;
//       case 'u':
//         newText += 'upu';
//         break;
//       default:
//         newText += word;
//         break;
//     }
//   }
//   originalText = textUser.value; // Almacena el texto original antes de limpiar
//   cleanInput(textUser);
//   return showResults(newText);
// }

// function decript() {
//   cleanInput(textUser); // Limpia el input antes de desencriptar
//   return showResults(originalText);
// }
