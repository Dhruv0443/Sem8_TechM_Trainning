  let doctors = [];
        function addDoctor(){
            let name1 = document.getElementById("name1").value;
            let specialty = document.getElementById("specialty").value;
            let experience = document.getElementById("experience").value;
            if(!name1 || !specialty || !experience){
                alert("Fill all fields");
                return;
            }
            let doctor = {
                name1: name1,
                specialty: specialty,
                experience: parseInt(experience),
            };
            doctors.push(doctor);
            displayDoctors();
        }
        let patients= [];
        function addPatient(){
            let name2 = document.getElementById("name2").value;
            let age = document.getElementById("age").value;
            let disease = document.getElementById("disease").value;
            if(!name2 || !age || !disease){
                alert("Please fill all fields");
                return;
            }
            let patient = {
                name2: name2,
                age: parseInt(age),
                disease: disease,
            };
            patients.push(patient);
            displayPatients();
        }
        function displayDoctors(){
            let output = document.getElementById('doctorList');
            output.innerHTML='';
            doctors.forEach((doc,index)=>{
                output.innerHTML+= `<p>${index + 1}. Dr ${doc.name1}, Specialty: ${doc.specialty}, 
                Experience: ${doc.experience} years </p>`
            });
        }
        function displayPatients(){
            let output = document.getElementById('patientList');
            output.innerHTML='';
            patients.forEach((pat,index)=>{
                output.innerHTML+= `<p>${index +1}. ${pat.name2}, Age: ${pat.age}years, 
                disease: ${pat.disease} </p>`
            });
        }
        function testCases1(){
            doctors = [];
            document.getElementById("doctorList").innerHTML='';
            let testDoctor1 = {name1:'Sai', specialty:'Cardiology', experience: 10};
            let testDoctor2 = {name1:'Rajan', specialty:'Neurology', experience: 8};
            doctors.push(testDoctor1, testDoctor2);
            displayDoctors();
            console.table(doctors);
            console.assert(doctors.length === 2, 'Test Case Failed');
            console.assert(doctors[0].name1 === 'Sai', 'Test Case Failed');
            console.assert(doctors[1].experience === 8, 'Test Case Failed');
            console.assert(doctors[1].name1 === 'Rajan', 'Test Case Failed');
            console.log("All test cases passed");
        }
        function testCases2(){
            patients = [];
            document.getElementById("patientList").innerHTML='';
            let testpatient1 = {name2:'Ram', age:15, disease:'typhoid'};
            let testpatient2 = {name2:'Shyam', age:35, disease:'chickenpox'};
            patients.push(testpatient1, testpatient2);
            displayPatients();

            console.table(patients);

            console.assert(patients.length === 2, 'Test Case Failed');
            console.assert(patients[0].name2 === 'Ram', 'Test Case Failed');
            console.assert(patients[1].age === 35, 'Test Case Failed');
            console.assert(patients[1].name2 === 'Shyam', 'Test Case Failed');
            console.log("All test cases passed");

        }
