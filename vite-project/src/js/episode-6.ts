const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const button = document.createElement("button");
  button.textContent = "Calculer la moyenne";
  button.style.padding = "12px 20px";
  button.style.background = "#2563eb";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    const n1 = prompt("Entrez le premier nombre :");
    const n2 = prompt("Entrez le deuxième nombre :");
    const n3 = prompt("Entrez le troisième nombre :");

    if (n1 === null || n2 === null || n3 === null) {
      alert("Saisie annulée");
      return;
    }

    const a = Number(n1);
    const b = Number(n2);
    const c = Number(n3);

    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
      alert("Veuillez entrer des nombres valides");
      return;
    }

    alert(`La moyenne est : ${(a + b + c) / 3}`);
  });

  app.appendChild(button);
}