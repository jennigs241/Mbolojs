const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const button = document.createElement("button");
  button.textContent = "Calculer la mention";
  button.style.padding = "12px 20px";
  button.style.background = "#2563eb";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    const noteInput = prompt("Entrez la moyenne de l'élève (0 à 20) :");

    if (noteInput === null) {
      alert("Saisie annulée");
      return;
    }

    const moyenne = Number(noteInput);

    if (Number.isNaN(moyenne) || moyenne < 0 || moyenne > 20) {
      alert("Veuillez entrer une moyenne valide entre 0 et 20");
      return;
    }

    let mention = "";

    if (moyenne < 10) {
      mention = "Aucune mention";
    } else if (moyenne < 12) {
      mention = "Passable";
    } else if (moyenne < 14) {
      mention = "Assez-bien";
    } else if (moyenne < 16) {
      mention = "Bien";
    } else if (moyenne < 18) {
      mention = "Très bien";
    } else {
      mention = "Excellent";
    }

    alert(`Mention : ${mention}`);
  });

  app.appendChild(button);
}