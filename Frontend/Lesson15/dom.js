// const nameElement = document.getElementById("name");

// nameElement.innerHTML = `<pre>${nameElement.innerText}</pre>`;

// NOTE: inputlarda .innnerText ve innerHTML metodlari yox .value() metodu işləyir
const form = document.getElementById("form");

const firstNameSelector = document.getElementById("first_name");
const lastNameSelector = document.getElementById("last_name");

const button = document.getElementById("submit");

// button.addEventListener("click", () => {
//     const firstName = firstNameSelector.value;
//     const lastName = lastNameSelector.value;

//     console.log(`Adi: ${firstName}, Soyadi: ${lastName}`);

//     firstNameSelector.value = "";
//     lastNameSelector.value = "";
//   });

const actionInputSelector = document.getElementById("action");
const todoListSelector = document.getElementById("todoList");
// const todoList = [];
let todoListHtml = "";
// let todoListTransformed;

// click focus mouseenter mouseleave dblclick keypress keydown keyup submit
button.addEventListener("click", () => {
  const action = actionInputSelector.value;
  //   todoList.push(action);
  todoListHtml += `<li>${action}</li>`;

  actionInputSelector.value = "";

  //   todoListTransformed = todoList.map((todoItem) => {
  //     return `<li>${todoItem}</li>`;
  //   });

  //   todoListSelector.innerHTML = todoListTransformed.join("");
  todoListSelector.innerHTML =
    `<li>${action}</li>` + todoListSelector.innerHTML;
  //   console.log(todoList, todoListTransformed);
});
