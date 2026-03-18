// ── STATE ──
let todos = [];
let totalDeg = 0;
let spinning = false;

// ── WHEEL ──
const COLORS = [
  "rgb(247, 224, 179)",
  "rgb(249, 240, 228)",
];

function buildWheel() {
  const wheel = document.getElementById("wheel");
  const active = todos.filter(t => !t.done);
  wheel.innerHTML = "";

  if (active.length === 0) {
    wheel.innerHTML = `<div style="
      position:absolute;inset:0;display:flex;
      align-items:center;justify-content:center;
      font-size:10px;color:#7a5c45;font-family:'DM Mono',monospace;
      text-align:center;padding:20px;
    ">add tasks to spin</div>`;
    return;
  }

  const sliceAngle = 360 / active.length;

  active.forEach((t, i) => {
    const div = document.createElement("div");
    div.style.cssText = `
      position: absolute;
      width: 90%;
      height: 52%;
      left: 50%;
      bottom: 50%;
      transform-origin: bottom left;
      clip-path: polygon(100% 0, 0 100%, 0 0);
      background-color: ${COLORS[i % COLORS.length]};
      transform: rotate(${i * sliceAngle}deg);
    `;

    const span = document.createElement("span");
    const label = t.text.length > 18 ? t.text.slice(0, 16) + "…" : t.text;
    span.textContent = label;
    span.style.cssText = `
      position: absolute;
      left: 20%;
      bottom: 50%;
      transform-origin: left;
      transform: translateX(-50%);
      font-size: 8px;
      font-weight: bold;
      font-family: 'DM Mono', monospace;
      color: #3d1f10;
      white-space: nowrap;
    `;

    div.appendChild(span);
    wheel.appendChild(div);
  });
}

function spinWheel() {
  if (spinning) return;
  const active = todos.filter(t => !t.done);
  if (active.length === 0) return;

  spinning = true;
  const resultText = document.getElementById("result-text");
  resultText.style.opacity = "0.3";

  const extra = Math.ceil(Math.random() * 1440) + 720;
  totalDeg += extra;
  document.getElementById("wheel").style.transform = `rotate(${totalDeg}deg)`;

  setTimeout(() => {
    spinning = false;
    const sliceAngle = 360 / active.length;
    const normalized = ((totalDeg % 360) + 360) % 360;
    const landed = (360 - normalized + 270) % 360;
    const idx = Math.floor(landed / sliceAngle) % active.length;
    resultText.textContent = active[idx].text;
    resultText.style.opacity = "1";
  }, 5100);
}

// ── TODO ──
function addTodo(text) {
  const input = document.getElementById("todo-input");
  const val = text || input.value.trim();
  if (!val) return;
  todos.push({ text: val, done: false, id: Date.now() });
  if (!text) input.value = "";
  renderTodos();
  buildWheel();
}

function toggleTodo(id) {
  const t = todos.find(t => t.id === id);
  if (t) t.done = !t.done;
  renderTodos();
  buildWheel();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  renderTodos();
  buildWheel();
}

function renderTodos() {
  const list = document.getElementById("todo-list");
  list.innerHTML = "";

  if (todos.length === 0) {
    list.appendChild(Object.assign(document.createElement("li"), {
      className: "empty-state", textContent: "no tasks yet"
    }));
    return;
  }

  todos.forEach(t => {
    const li = document.createElement("li");
    li.className = "todo-item" + (t.done ? " done" : "");

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = t.done;
    cb.onchange = () => toggleTodo(t.id);

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = t.text;

    const del = document.createElement("button");
    del.className = "del-btn";
    del.textContent = "✕";
    del.onclick = () => deleteTodo(t.id);

    li.append(cb, span, del);
    list.appendChild(li);
  });
}

document.getElementById("todo-input").addEventListener("keydown", e => {
  if (e.key === "Enter") addTodo();
});

buildWheel();