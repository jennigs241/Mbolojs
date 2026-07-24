export function episode1() {
  const container = document.createElement("div");
  container.innerHTML = `
    <button id="sumBtn">Calculer la somme</button>
  `;

  const sumBtn = container.querySelector<HTMLButtonElement>("#sumBtn");

  let a: number | null = null;
  let b: number | null = null;

  sumBtn?.addEventListener("click", () => {
    const x = prompt("Premier nombre :");
    const y = prompt("Deuxième nombre :");

    if (x === null || y === null) {
      alert("Saisie annulée");
      return;
    }

    a = Number(x);
    b = Number(y);

    alert(`La somme est : ${a + b}`);
  });

  return container;
}