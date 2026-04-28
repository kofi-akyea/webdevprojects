const cards = document.querySelectorAll(".cards");
const lists = document.querySelectorAll(".list");

for (const card of cards) {
  card.addEventListener("dragstart", dragStartHandler);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOverHandler);
  list.addEventListener("drop", dropHandler);
}

function dragStartHandler(event) {
  event.dataTransfer.setData("text/plain", this.id);
  console.log("Drag started");
}

function dragOverHandler(event) {
  event.preventDefault();
}

function dropHandler(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const card = document.getElementById(data);
  this.appendChild(card);
}
