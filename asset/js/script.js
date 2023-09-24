const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const saveAction = () => {
  if (inputBox.id === "input-box") {
    addTask();
  } else if (inputBox.id === "edit-input") {
    editTask();
  }
}

const addTask = () => {
  if (inputBox.value === "") {
    alert("Kindly write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let closeSpan = document.createElement("span");
    let editSpan = document.createElement("span");


    editSpan.classList.add('edit');

    closeSpan.innerHTML = "\u00d7";
    editSpan.innerHTML = "✏️";

    li.appendChild(editSpan);
    li.appendChild(closeSpan);
  }
  inputBox.value = "";
  saveData();
};

const editTask = () => {
  if (inputBox.value === "") {
    alert("Kindly write something");
  } else {
    let li = document.getElementById("edit-li");
    li.innerHTML = inputBox.value;
    let closeSpan = document.createElement("span");
    let editSpan = document.createElement("span");


    editSpan.classList.add('edit');

    closeSpan.innerHTML = "\u00d7";
    editSpan.innerHTML = "✏️";

    li.appendChild(editSpan);
    li.appendChild(closeSpan);
    li.removeAttribute('id');

    inputBox.setAttribute('id', 'input-box');
  }
  inputBox.value = "";
  saveData();
};



listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.className === "edit") {
      inputBox.value = e.target.parentElement.firstChild.textContent.trim();
      e.target.parentElement.setAttribute('id', 'edit-li')
      inputBox.setAttribute('id', 'edit-input');
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showTask();
