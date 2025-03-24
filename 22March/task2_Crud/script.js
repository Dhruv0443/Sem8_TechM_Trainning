let items = JSON.parse(localStorage.getItem("items") || "[]");
const itemList = document.getElementById("itemList");
const itemInput = document.getElementById("itemInput");
function renderItems() {
    itemList.innerHTML = "";
    items.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${item.name}</span>
        <button onclick="editItem(${item.id})">Edit</button>
        <button onclick="deleteItem(${item.id})">Delete</button>
        `;
        itemList.appendChild(li);
    });
}
function addItem() {
    const name = itemInput.value.trim();
    if (name) {
        const newItem = { id: Date.now(), name };
        items.push(newItem);
        localStorage.setItem("items", JSON.stringify(items));
        itemInput.value = "";
        renderItems();
    }
}
function editItem(id) {
    var _a;
    const newName = prompt("Edit item:", (_a = items.find(item => item.id === id)) === null || _a === void 0 ? void 0 : _a.name);
    if (newName) {
        items = items.map(item => item.id === id ? Object.assign(Object.assign({}, item), { name: newName }) : item);
        localStorage.setItem("items", JSON.stringify(items));
        renderItems();
    }
}
function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    localStorage.setItem("items", JSON.stringify(items));
    renderItems();
}
//Intial render
renderItems();
