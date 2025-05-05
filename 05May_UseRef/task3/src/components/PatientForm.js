import React, { useEffect, useRef } from "react";
function PatientForm({onSubmit,editingPatient}){
    const nameRef = useRef();
    const ageRef = useRef();
    const conditionRef = useRef();
    useEffect(()=>{
        if(editingPatient){
            nameRef.current.value = editingPatient.name;
            ageRef.current.value = editingPatient.age;
            conditionRef.current.value = editingPatient.condition;
        }else{
            nameRef.current.value='';
            ageRef.current.value='';
            conditionRef.current.value='';
        }
    },[editingPatient]);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const newPatient ={
            id:editingPatient?editingPatient.id:undefined,
            name:nameRef.current.value,
            age:ageRef.current.value,
            condition:conditionRef.current.value,
        };
        onSubmit(newPatient);
        nameRef.current.value='';
        ageRef.current.value='';
        conditionRef.current.value='';
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2>{editingPatient? "Edit":"Add"} </h2>
            <input ref={nameRef} type="text" placeholder="Name" required/>
            <input ref={ageRef} type="number" placeholder="Age" required/>
            <input ref={conditionRef} type="text" placeholder="Condition" required/>
            <button type="submit">{editingPatient?'Update':'Add'} </button>
        </form>
    )
}
export default PatientForm;