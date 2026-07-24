const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const button = document.createElement("button");
  button.textContent = "Afficher le double";
  button.style.padding = "12px 20px";
  button.style.background = "#2563eb";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    const valeur = prompt("Entrez un nombre :");

    if (valeur === null) {
      alert("Saisie annulée");
      return;
    }

    const nombre = Number(valeur);

    if (Number.isNaN(nombre)) {
      alert("Ce n'est pas un nombre");
      return;
    }

    alert(`Le double est : ${nombre * 2}`);
  });

  app.appendChild(button);
}