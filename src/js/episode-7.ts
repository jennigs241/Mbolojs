const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const button = document.createElement("button");
  button.textContent = "Vérifier l'âge";
  button.style.padding = "12px 20px";
  button.style.background = "#2563eb";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    const ageInput = prompt("Entrez votre âge :");

    if (ageInput === null) {
      alert("Saisie annulée");
      return;
    }

    const age = Number(ageInput);

    if (Number.isNaN(age)) {
      alert("Veuillez entrer un nombre valide");
      return;
    }

    if (age < 18) {
      alert("Vous êtes mineur");
    } else {
      alert("Vous êtes majeur");
    }
  });

  app.appendChild(button);
}