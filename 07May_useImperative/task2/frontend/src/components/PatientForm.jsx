import { forwardRef, useRef, useEffect } from 'react';

const PatientForm = forwardRef(({ onSave, selected, onPatientChange }, ref) => {
    const nameRef = useRef();
    const ageRef = useRef();

    useEffect(() => {
        if (selected) {
            nameRef.current.value = selected.name;
            ageRef.current.value = selected.age;
        } else {
            nameRef.current.value = "";
            ageRef.current.value = "";
        }
    }, [selected]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const patient = {
            name: nameRef.current.value,
            age: ageRef.current.value,
        };
        onSave(patient);
        onPatientChange();
    };

    return (
        <form onSubmit={handleSubmit} ref={ref}>
            <input ref={nameRef} placeholder="Name" required />
            <input ref={ageRef} placeholder="Age" type="number" required />
            <button type="submit">{selected ? 'Update' : 'Add'}</button>
        </form>
    );
});

export default PatientForm;