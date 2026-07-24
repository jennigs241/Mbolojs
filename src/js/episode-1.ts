const message: string = "Mbolo JS";
console.log(message);

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `<h1>${message}</h1>`;
}