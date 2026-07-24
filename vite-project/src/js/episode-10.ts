const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const button = document.createElement("button");
  button.textContent = "Calculer le total";
  button.style.padding = "12px 20px";
  button.style.background = "#2563eb";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    const montantInput = prompt("Entrez le montant de la facture :");

    if (montantInput === null) {
      alert("Saisie annulée");
      return;
    }

    const montant = Number(montantInput);

    if (Number.isNaN(montant) || montant < 0) {
      alert("Veuillez entrer un montant valide");
      return;
    }

    const total = montant > 40000 ? montant - montant * 0.1 : montant;

    alert(`Total à payer : ${total} F`);
  });

  app.appendChild(button);
}