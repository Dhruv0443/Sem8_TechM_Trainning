import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getDatabase, set, ref, get, remove } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZsAE7Bs9qYktVsdhiunCaqKWmv01MgVw",
    authDomain: "sem8firebase.firebaseapp.com",
    projectId: "sem8firebase",
    storageBucket: "sem8firebase.firebasestorage.app",
    messagingSenderId: "426869939120",
    appId: "1:426869939120:web:06b7b22443c85cdb56d475"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const addDataButton = document.getElementById('add_btn');
const firstMessage = document.getElementById('first');
// Sanitize input to remove invalid characters for Firebase paths
function sanitizeInput(input) {
    return input.replace(/[.#$[\]]/g, '_');
}
function addData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    let number = document.getElementById('number').value;
    number = sanitizeInput(number);
    set(ref(db, 'info/' + number), {
        name: name,
        age: age,
        number: number
    }).then(() => {
        firstMessage.innerText = "Added";
        document.getElementById('name').value = "";
        document.getElementById('age').value = "";
        document.getElementById('number').value = "";
        readData();
    }).catch((error) => {
        console.error("Error adding data: ", error);
    });
}
addDataButton.addEventListener('click', addData);
function readData() {
    const userRef = ref(db, "info/");
    get(userRef).then((showData) => {
        const data = showData.val();
        const table = document.querySelector('table');
        let html = '';
        for (const key in data) {
            const { name, age, number } = data[key];
            html += `
                <tr>
                    <td>${name}</td>
                    <td>${age}</td>
                    <td>${number}</td>
                    <td><button class="del" onclick="deleteData('${number}')">Delete</button></td>
                    <td><button class="update" onclick="updateData('${number}')">Update</button></td>
                </tr>
            `;
        }
        table.innerHTML = html;
    }).catch((error) => {
        console.error("Error reading data: ", error);
    });
}
readData();
window.deleteData = function(number) {
    number = sanitizeInput(number);
    const userRef = ref(db, 'info/' + number);
    remove(userRef).then(() => {
        firstMessage.innerText = "Deleted";
        readData();
    }).catch((error) => {
        console.error("Error deleting data: ", error);
    });
};
window.updateData = function(number) {
    number = sanitizeInput(number);
    const userRef = ref(db, 'info/' + number);
    get(userRef).then((item) => {
        document.getElementById('name').value = item.val().name;
        document.getElementById('age').value = item.val().age;
        document.getElementById('number').value = item.val().number;
    }).catch((error) => {
        console.error("Error getting data: ", error);
    });
    readData();
};
