let userInput = document.querySelector(".input");
let submitBtn = document.getElementById("submit");
let groceries = document.querySelector(".grocery");
let clearBtn = document.querySelector(".clear");

let groceryList = [];

const clearGroceries = () => {
  groceries.innerHTML = "";
  groceryList = [];
  clearBtn.style.display = "none";
};

const removeGrocery = (e) => {
  e.target.parentElement.parentElement.remove();
  let grocery =
    e.target.parentElement.parentElement.firstChild.nextSibling.innerText;

  //FIlTER OUT THE ITEM FROM THE ARRAY USING SPLICE METHOD
  // let index = groceryList.indexOf(grocery);
  // groceryList.splice(index, 1);

  //FIlTER OUT THE ITEM FROM THE ARRAY USIN FILTER METHOD
  let remnant = groceryList.filter((item) => item !== grocery);
  groceryList = remnant;

  if (groceryList.length === 0) {
    clearBtn.style.display = "none";
  }
};

const addGrocery = () => {
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

  groceries.insertAdjacentHTML("afterbegin", html);
  clearBtn.style.display = "inline-block";

  let deleteBtn = document.querySelector(".grocery-list_delete");

  if (!!deleteBtn) {
    deleteBtn.addEventListener("click", removeGrocery);
  }
};

submitBtn.addEventListener("click", addGrocery);

clearBtn.addEventListener("click", clearGroceries);
