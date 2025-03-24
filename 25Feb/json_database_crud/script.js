let jsonDatabase =[
    {id:1,name:'John Doe',age:30},
    {id:2,name:'Jane Smith',age:37},
];
//inmemomry database //key value pairs dfines it a json obejct
const form = document.getElementById('crudForm');
const jsonTable =document.getElementById('jsonTable').getElementsByTagName('tbody')[0];
const clearButton =document.getElementById('clearButton');
//function to render the table
function renderTable(){
    jsonTable.innerHTML='';
    jsonDatabase.forEach(item=>{
        const row =jsonTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        cell1.textContent=item.id;
        cell2.textContent=item.name;
        cell3.textContent=item.age;
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.onclick=()=>deleteRecord(item.id);
        cell4.appendChild(deleteButton);
    });
}
//Create Update
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    if(!id ||!name ||!age){
        alert("Please fillout all details");
        return;
    }
    const existingRecordIndex =jsonDatabase.findIndex(item =>item.id ==id);
    if(existingRecordIndex===-1){
        jsonDatabase.push({id:parseInt(id),name,age:parseInt(age)});
    }
    else{
        jsonDatabase[existingRecordIndex]={id:parseInt(id),name,age:parseInt(age)};
    }
    //Reset Form
    form.reset();
    //Re-render the table
    renderTable();
});
//DELETE
function deleteRecord(id){
    jsonDatabase =jsonDatabase.filter(item =>item.id!==id);
    renderTable();
}
//CLEAR
clearButton.addEventListener('click',()=>{
    jsonDatabase=[];
    renderTable();
});
//initail render
renderTable();