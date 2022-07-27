// let btn = document.querySelector(".btn");
// let count = document.querySelector(".count");
// let quote = document.querySelector(".quote");
// let author = document.querySelector(".author");

// let quotes = [
//   {
//     quote: "Programming is easy",
//     author: "John Doe",
//     count: 1,
//   },
//   {
//     quote:
//       "Thanks to all who did not help me, it is because of you I did it myselg.",
//     author: "Albelt Einstein",
//     count: 2,
//   },
//   {
//     quote: "You will remember this as the day you almost caught me",
//     author: "Jack Sparrow(Pirates of the Caribbean)",
//     count: 3,
//   },
// ];

// const displayQuote = () => {
//   let quoteToDisplayIndex = Math.floor(Math.random() * quotes.length);
//   let data = quotes[quoteToDisplayIndex];
//   quote.innerHTML = data.quote;
//   count.innerHTML = data.count;
//   author.innerHTML = data.author;

//   quote.style.display = "block";
//   count.style.display = "inline";
//   author.style.display = "block";
// };

// btn.addEventListener("click", displayQuote);

let btn = document.querySelector(".btn");
let count = document.querySelector(".count");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

let quotes = [
  {
    quote: "Programming is easy",
    author: "John Doe",
    count: 1,
  },
  {
    quote:
      "Thanks to all who did not help me, it is because of you I did it myselg.",
    author: "Albelt Einstein",
    count: 2,
  },
  {
    quote: "You will remember this as the day you almost caught me",
    author: "Jack Sparrow(Pirates of the Caribbean)",
    count: 3,
  },
  {
    quote: "I am not aware!",
    author: "Muhammad Buhari",
    count: 4,
  },
];

function randomQuote() {
  let rand = Math.floor(Math.random() * quotes.length);
  let data = quotes[rand];
  return data;
}

const displayQuote = () => {
  let data = randomQuote();
  quote.innerHTML = data.quote;
  count.innerHTML = data.count;
  author.innerHTML = data.author;

  quote.style.display = "block";
  count.style.display = "inline";
  author.style.display = "block";
};

btn.addEventListener("click", displayQuote);
