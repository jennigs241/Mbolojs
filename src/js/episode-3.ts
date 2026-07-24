const btn1 = document.querySelector<HTMLButtonElement>("#btn1");
const btn2 = document.querySelector<HTMLButtonElement>("#btn2");

let nombre1: number | null = null;
let nombre2: number | null = null;

btn1?.addEventListener("click", () => {
  const valeur = prompt("Saisis le premier nombre :");
  nombre1 = valeur !== null ? Number(valeur) : null;
  alert(`Premier nombre enregistré : ${nombre1}`);
});

btn2?.addEventListener("click", () => {
  const valeur = prompt("Saisis le deuxième nombre :");
  nombre2 = valeur !== null ? Number(valeur) : null;

  if (nombre1 !== null && nombre2 !== null) {
    alert(`La somme est : ${nombre1 + nombre2}`);
  } else {
    alert("Il faut d'abord saisir les deux nombres.");
  }
});