let container = document.getElementById("container");
let start = document.querySelector(".start");
let controllers = document.querySelector(".controllers");

start.addEventListener("click", () => {
  container.style.display = "grid";
  controllers.classList.add("game-start");
  loadCards();
});

let cards = [
  "https://images.unsplash.com/photo-1590677147861-622ec92a60f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1542382689-217623cad37c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3F1aXJyZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1590677147861-622ec92a60f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1542382689-217623cad37c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3F1aXJyZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1567601916666-581e8d89288b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRpZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1567601916666-581e8d89288b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRpZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9jZWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

//const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const shuffledArray = array.sort((a, b) => 0.5 - Math.random());
let photos = [];

const flipCard = (...args) => {
  const [current, currentParent, currentPhoto] = args;

  const photosLength = photos.length;

  if (photosLength <= 1) {
    current.classList.add("flipped");
    currentParent.classList.add("flipped");
    const update = {
      photo: current,
      parent: currentParent,
      photoUrl: currentPhoto,
    };
    photos.push(update);

    if (photosLength === 1) {
      for (let i = 0; i < photosLength; i++) {
        if (photos[i].photoUrl === photos[i + 1].photoUrl) {
          current.classList.add("flipped");
          currentParent.classList.add("flipped");
          photos = [];
          console.log("match", photos);
        } else {
          setTimeout(() => {
            photos.forEach((photo) => {
              photo.photo.classList.remove("flipped");
              photo.parent.classList.remove("flipped");
            });

            photos = [];
          }, 1000);
        }
      }
    }
  }
  gameEnd();
};

const getCards = () => {
  let cards = document.querySelectorAll(".card");
  cards = [...cards];

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      let current = e.target.parentElement.parentElement.children[0];
      let currentParent = e.target.parentElement.parentElement.parentElement;
      let currentPhoto = e.target.nextElementSibling.children[0].src;
      flipCard(current, currentParent, currentPhoto);
    });
  });
};

const gameEnd = () => {
  let cards = document.querySelectorAll(".card");
  cards = [...cards];
  let cardsLength = cards.length;
  let counter = 0;

  cards.forEach((card) => {
    if (card.classList.contains("flipped")) {
      counter++;
    }
    if (counter === cardsLength) {
      setTimeout(() => {
        alert("Game End, You Win!");
      }, 1000);
    }
  });
};

const shuffleCards = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const loadCards = () => {
  shuffleCards(cards);

  let html;

  cards.forEach((card) => {
    html = `
    <div class="flip-card">
    <div class="card-container">
    <div class="card">
      <div class="front"
      
      >
      </div>
      <div class="back"      
      >
        <img src="${card}" alt='Image'
        class="back-image" />
      </div>
    </div>
    </div>
   `;

    container.insertAdjacentHTML("afterbegin", html);
  });

  getCards();
};

// window.addEventListener("DOMContentLoaded", () => {
//   loadCards();
// });
