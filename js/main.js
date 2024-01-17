/* Menu */
const menu = document.querySelector(".btn-group-vertical");
menu.classList.replace("btn-group-vertical", "btn-group-horizontal");

/* Header */
const header = document.querySelector(".jumbotron");
header.classList.add("bg-secondary", "text-light", "text-right");

const headerButton = header.querySelector(".btn-primary");
headerButton.classList.replace("btn-primary", "btn-success");

/* Cards */
const cards = document.querySelectorAll(".card");

const cardsOrder = ["Natureza", "Animais", "Pessoas", "Tecnologia"];

cardsOrder.map((name, index) => {
  const currentCard = cards[index];

  const cardTitle = currentCard.querySelector(".card-title");

  cardTitle.textContent = name;

  if (name === "Animais") {
    const cardButton = currentCard.querySelector(".btn-primary");
    cardButton.classList.replace("btn-primary", "btn-success");
  }
});

/* List */
const list = document.querySelector(".list-group");
const listItems = list.querySelectorAll(".list-group-item");

const firstListItem = listItems[0];
firstListItem.classList.remove("active");

const itemsToAdd = ["Quarto item", "Quinto item"];

itemsToAdd.map((item) => {
  const element = document.createElement("li");

  element.classList.add("list-group-item");

  if (item === "Quarto item") {
    element.classList.add("active");
  }

  element.textContent = item;

  list.appendChild(element);
});
