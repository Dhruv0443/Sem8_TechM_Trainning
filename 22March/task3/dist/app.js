var doctors = [
    { id: 1, name: "Dr. John Smith", patients: [{ id: 101, name: "Alice Brown" }, { id: 102, name: "Bob Williams" }] },
    { id: 2, name: "Dr. Sarah Jhonson", patients: [{ id: 103, name: "Charles Davis" }, { id: 104, name: "Diana Evas" }] },
    { id: 3, name: "Dr. Robert Wilson", patients: [{ id: 105, name: "Evan Parker" }] },
];
document.addEventListener("DOMContentLoaded", function () {
    var doctorList = document.getElementById("doctorList");
    var patientList = document.getElementById("patientList");
    var selectedDoctor = document.getElementById("selectedDoctor");
    function displayDoctors() {
        doctorList.innerHTML = "";
        doctors.forEach(function (doctor) {
            var li = document.createElement("li");
            li.textContent = doctor.name;
            li.classList.add("list-group-item", "list-group-item-action");
            li.addEventListener("click", function () { return displayPatients(doctor); });
            doctorList.appendChild(li);
        });
    }
    function displayPatients(doctor) {
        selectedDoctor.textContent = doctor.name;
        patientList.innerHTML = "";
        if (doctor.patients.length === 0) {
            patientList.innerHTML = "<li class='list-group-item text-muted'>No patients assigned</li>";
            return;
        }
        doctor.patients.forEach(function (patient) {
            var li = document.createElement("li");
            li.textContent = patient.name;
            li.classList.add("list-group-item");
            patientList.appendChild(li);
        });
    }
    displayDoctors();
});
