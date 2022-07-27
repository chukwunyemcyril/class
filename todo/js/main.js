// let submitBtn = document.getElementById("submit");
// let clearBtn = document.querySelector(".clear");
// let input = document.querySelector(".input");
// let deleteBtn = document.querySelector(".grocery-list_delete");

// let groceryList = [];

// submitBtn.addEventListener("click", function () {
//   groceryList.push(input.value);
//   input.value = "";

//   let html;

//   for (let i = 0; i < groceryList.length; i++) {
//     html = `
//     <div class="grocery-list">
//     <h3 class="grocery-list_item">${groceryList[i]}</h3>
//     <div class="grocery-list_action">
//     <p class="grocery-list_update">&Uopf;</p>
//     <p class="grocery-list_delete">&times;</p>
//     </div>
//     </div>
//     `;
//   }

//   document.querySelector(".grocery").insertAdjacentHTML("afterbegin", html);

//   clearBtn.style.display = "inline-block";
// });

// deleteBtn.addEventListener("click", () => {
//   document
//     .querySelector(".grocery")
//     .removeChild(document.querySelector(".grocery-list"));
//   groceryList = [];
// });

// if (deleteBtn) {
//   deleteBtn.addEventListener("click", (e) => {
//     alert(e);
//     console.log(e);
//   });
// }

let userInput = document.querySelector(".input");
let submitBtn = document.getElementById("submit");
let groceries = document.querySelector(".grocery");
let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".grocery-list_delete");

let groceryList = [];

submitBtn.addEventListener("click", function () {
  groceryList.push(userInput.value);

  userInput.value = "";

  let html;

  groceryList.forEach((item) => {
    html = `
    <div class="grocery-list">
    <h3 class="grocery-list_item">${item}</h3>
    <div class="grocery-list_action">
    <button class="grocery-list_update">&Uopf;</button>
    <button class="grocery-list_delete">&times;</button>
    </div>
    </div>
    `;
  });

  // groceries.innerHTML = html;

  groceries.insertAdjacentHTML("afterbegin", html);

  clearBtn.style.display = "inline-block";
});

if (!!deleteBtn) {
  deleteBtn.addEventListener("click", (e) => {
    alert(e);
    console.log(e);
  });
}

clearBtn.addEventListener("click", () => {
  groceries.innerHTML = "";
  groceryList = [];
  clearBtn.style.display = "none";
});
