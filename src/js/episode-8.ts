const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const button = document.createElement("button");
  button.textContent = "Demander le nom et le sexe";
  button.style.padding = "12px 20px";
  button.style.background = "#2563eb";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "10px";
  button.style.cursor = "pointer";

  button.addEventListener("click", () => {
    const nom = prompt("Entrez votre nom :");
    const sexe = prompt("Entrez votre sexe (homme ou femme) :");

    if (nom === null || sexe === null) {
      alert("Saisie annulée");
      return;
    }

    const sexeNormalise = sexe.trim().toLowerCase();

    if (sexeNormalise === "homme") {
      alert(`Bonjour monsieur ${nom}`);
    } else if (sexeNormalise === "femme") {
      alert(`Bonjour madame ${nom}`);
    } else {
      alert("Sexe non reconnu");
    }
  });

  app.appendChild(button);
}