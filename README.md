# javascript-todo

## Project overview

This is a simple Todo app built with plain HTML, minimal CSS, and JavaScript. It demonstrates adding, counting, and removing tasks dynamically in the browser.

## Files

- `index.html` — the app's markup and structure.
- `app.js` — JavaScript that makes the app interactive (adding tasks, deleting tasks, updating the counter, clearing all).
- `src/input.css` and `src/output.css` — styles used in the project (Tailwind classes are used inline in the markup and `output.css` is linked).

## How the HTML is structured

Key elements and their roles (IDs used by the script):

- `#input` — the text input where the user types a new todo.
- `#plus` — button to add the todo (contains a plus icon).
- `#task` — the `<ul>` container where individual `<li>` tasks are appended.
- `#counter` — a span that shows the number of pending tasks.
- `#btn` — "Clear All" button that removes every task.

Example (simplified):

```html
<input id="input" placeholder="Add your new todo" />
<button id="plus">+</button>
<ul id="task"></ul>
<span id="counter">0</span>
<button id="btn">Clear All</button>
```

## Key JavaScript behavior (in `app.js`)

- Variables selected from the DOM:
  - `input` => `document.getElementById("input")`
  - `plus` => `document.querySelector("#plus")`
  - `taskContainer` => `document.getElementById("task")`
  - `counter` => `document.getElementById("counter")`
  - `btn` => `document.querySelector("#btn")`

- updateCounter():
  - Counts how many `<li>` elements are inside `#task` and writes that number into `#counter`.
  - If there are no tasks it writes `0`.

- Adding a task (click handler on `#plus`):
  1. If the input is empty (or only whitespace), it returns early.
  2. It creates a new `<li>` element and inside it a `<span>` (for the text) and a `<button>` with a trash icon `<i>`.
  3. It appends the new `<li>` to `#task`, clears the input, and calls `updateCounter()`.
  4. The trash icon has its own `click` listener which removes the corresponding `<li>` and calls `updateCounter()` again.

- Clearing all tasks (click handler on `#btn`):
  - Sets `taskContainer.innerHTML = "";` then calls `updateCounter()` to reset the counter.

## Quick summary

The app demonstrates DOM manipulation patterns: selecting elements, creating nodes, wiring event listeners, and updating the UI (the task list and counter) in response to user events.

