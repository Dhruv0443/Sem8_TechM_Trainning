function loadXML() {
    fetch('index.xml')
        .then(response => response.text()) // 
        .then(str => {
            const xml = new DOMParser().parseFromString(str, 'text/xml');
            // Parsing
            const people = xml.getElementsByTagName('person'); // Elements from person tag
            const listDiv = document.getElementById('list'); // Div in HTML file where data is displayed
            Array.from(people).forEach(person => { // Loop to get all data
                const name = person.getElementsByTagName('name')[0].textContent;
                const age = person.getElementsByTagName('age')[0].textContent;
                const personDiv = document.createElement('div'); // New div for each square of data of person
                personDiv.classList.add('person');   
                const nameElement = document.createElement('h2');
                nameElement.textContent = name; // Get name from XML file and put it into h2               
                const ageElement = document.createElement('p');
                ageElement.textContent = `Age: ${age}`;                
                personDiv.appendChild(nameElement); // Append name element to the person div
                personDiv.appendChild(ageElement); // Append age element to the person div                
                listDiv.appendChild(personDiv); // Append the person div to the list div
            });
        })
        .catch(console.error);
}
window.onload = loadXML;
