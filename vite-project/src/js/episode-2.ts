const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  const button = document.createElement("button");
  button.textContent = "Clique ici";

  button.addEventListener("click", () => {
    const nom = prompt("Quel est ton nom ?");

    if (nom && nom.trim() !== "") {
      alert(`Bonjour ${nom}`);
    } else {
      alert("Bonjour !");
    }
  });

  app.appendChild(button);
}