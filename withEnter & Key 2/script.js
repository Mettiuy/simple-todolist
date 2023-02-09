let $ = document;
let inputTodo = $.getElementById("input");
let addBtn = $.querySelector(".addbtn");
let container = $.querySelector(".container");
function checkBtn() {
  if (inputTodo.value == "") {
    return false;
  } else {
    addNewTodo();
  }
}
function checkInput(event) {
  if (event.key == "Enter")
    if (inputTodo.value) {
      addNewTodo();
    }
}
function addNewTodo() {
  // create
  let gridItem = $.createElement("div");
  let text = $.createElement("div");
  let icon = $.createElement("i");

  // innerText
  text.innerText = inputTodo.value.trim();

  // classLists
  gridItem.classList.add("item");
  text.classList.add("text");
  icon.className = "fa fa-trash";
  icon.classList.add("icon");

  // appendChild
  gridItem.appendChild(text);
  gridItem.appendChild(icon);
  container.appendChild(gridItem);
  document.body.appendChild(container);

  // delete
  icon.addEventListener("click", function () {
    gridItem.classList.add("hide");
    setTimeout(() => {
      icon.parentElement.remove();
    }, 500);
  });
  inputTodo.value = "";
}

addBtn.addEventListener("click", checkBtn);
inputTodo.addEventListener("keydown", checkInput);
// thanks GOD
