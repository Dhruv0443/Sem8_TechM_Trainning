import { useState } from "react";
import BankForm from "./components/BankForm";
import BankList from "./components/BankList";
import 'bootstrap/dist/css/bootstrap.min.css';
const App=()=> {
  const [records,setRecords] = useState([]);
  const [recordForEdit,setRecordForEdit]=useState(null);
  const addOrEdit =(bank ,resetForm) =>{
    if(bank.id ===0){
      bank.id = Date.now();
      setRecords([...records,bank]);
    }else{
      setRecords(records.map(r=>(r.id===bank.id ? bank:r)));
    }
    resetForm();
    setRecordForEdit(null);
  };
  const editRecord = record=>{
    setRecordForEdit(record);
  };
  const deleteRecord =id =>{
    if(window.confirm("Are you sure to delete this record ?")){
      setRecords(records.filter(r=>r.id!==id));
    }
  };
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Bank Account Management</h2>
      <div className="row">
        <div className="col-md-4">
          <BankForm addOrEdit={addOrEdit} recordForEdit={recordForEdit}/>
        </div>
        <div className="col-md-8">
          <BankList records={records} editRecord={editRecord} deleteRecord={deleteRecord}/>
        </div>
      </div>
    </div>
  );
};

export default App;
