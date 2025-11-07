let input = document.getElementById("input");
let plus = document.querySelector("#plus");
let footer = document.querySelector("#footer");
let btn = document.querySelector("#btn");
let taskContainer = document.getElementById("task");
let counter = document.getElementById("counter");

// Update the counter function
function updateCounter() {
  const count = taskContainer.querySelectorAll("li").length;
  if (count === 0) {
    counter.innerHTML = "0";
  } else {
    counter.innerHTML = count;
  }
}
// Add new task
plus.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  let todo = input.value;
  let li = document.createElement("li");
  let span = document.createElement("span");
  let button = document.createElement("button");
  let iTag = document.createElement("i");

  li.setAttribute("class", "bg-gray-200 w-full flex group");
  span.setAttribute("class", "p-[0.5rem]");
  button.setAttribute(
    "class",
    "transition-opacity md:opacity-0 opacity-100 group-hover:opacity-100 duration-700 bg-red-600 rounded ml-auto text-white"
  );
  iTag.setAttribute("class", "fa-solid fa-trash p-[0.8rem] cursor-pointer");

  span.textContent = todo;
  button.append(iTag);
  li.append(span, button);
  taskContainer.append(li);

  input.value = "";

  // Update the task counter
  updateCounter();

  // Delete individual task
  iTag.addEventListener("click", () => {
    li.remove();
    updateCounter();
  });
});

// Clear all tasks
btn.addEventListener("click", () => {
  taskContainer.innerHTML = "";
  updateCounter();
});
