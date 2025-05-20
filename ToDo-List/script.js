const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const ul = document.getElementById("ul");

addBtn.addEventListener("click", function() {
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter something...");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = " ❌";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  ul.appendChild(li);
  input.value = "";
});
