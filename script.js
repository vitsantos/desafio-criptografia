const viewText = (inputText) => {  
  const emptyState = document.getElementById("empty-state"); 
  const fullState = document.getElementById("full-state");
  const viewTextCaptured = document.getElementById("view-text");  
   
  if (inputText !== "") {
    emptyState.style.display = "none";
    fullState.style.display = "flex";
    viewTextCaptured.innerText = inputText;
  } else {
    emptyState.style.display = "flex";
    fullState.style.display = "none";
  }
}

const m = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
  [" ", " "]
];

const encrypt = () => {
  let initialText = document.getElementById("input-text").value.toLowerCase();
  
  // Realiza todas as substituições de uma vez, sem alterar intermediários
  m.forEach(([original, encrypted]) => {
    initialText = initialText.split(original).join(encrypted);
  });

  viewText(initialText);  
}

const decrypt = () => {
  let initialText = document.getElementById("input-text").value.toLowerCase();  
  
  // Reverte todas as substituições de uma vez, sem alterar intermediários
  m.forEach(([original, encrypted]) => {
    initialText = initialText.split(encrypted).join(original);
  });

  viewText(initialText);  
}

const copy = () => {
  const viewTextCaptured = document.getElementById("view-text").innerText;
  navigator.clipboard.writeText(viewTextCaptured).then(() => {
    console.log("Copiado");
  }).catch(err => {
    console.error('Erro ao copiar o texto: ', err);
  });
}

const validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];

const sanitizeInput = () => {
  const inputElement = document.getElementById("input-text");
  const inputText = inputElement.value.toLowerCase();

  const sanitizedText = inputText.split("").filter(l => validLetters.includes(l)).join("");  
  inputElement.value = sanitizedText;   
};