import React,{useState} from "react";
import * as XLSX from 'xlsx';
import { saveAs } from "file-saver";
import 'bootstrap/dist/css/bootstrap.min.css';
const EditableTableExport =()=>{
    const [data,setData]=useState([
        {id:1,name:'John Doe',email:'john.doe@gmail.com',age:25},
        {id:1,name:'Dev',email:'dev@gmail.com',age:27},
        {id:1,name:'Dhruv',email:'dhruv123@gmail.com',age:22},
    ]);
    const [editIndex,setEditIndex]=useState(null);
    const [editedRow,setEditedRow]=useState(null);
    const handleEdit = (index)=>{
        setEditIndex(index);
        setEditedRow({...data[index]});
    };
    const handleSave =()=>{
        const newData =[...data];
        newData[editIndex]=editedRow;
        setData(newData);
        setEditIndex(null);
    };
    const handleDelete =(index)=>{
        const newData = data.filter((_,i)=>i !==index);
        setData(newData);
    };
    const handleChange =(e)=>{
        const {name,value} = e.target;
        setEditedRow({...editedRow,[name]:value});
    };
    const exportToExcel =()=>{
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook,worksheet,'Users');
        const excelBuffer = XLSX.write(workbook,{
            bookType:'xlsx',
            type:'array'
        });
        const blob = new Blob([excelBuffer],{type:'application/vnd.openxmlformats-officedocument.spreadesheetxml.sheet',});
        saveAs(blob,'EditableUserData.xlsx');
    };
    return(
        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Editable User Table</h2>
            <table className="w-full border-collapse border mb-4">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Age</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row,index)=>(
                        <tr key={row.id}>
                            <td className="border px-4 py-2">{row.id}</td>
                            <td className="border px-4 py-2">
                            {editIndex === index ? (
                                <input
                                name="name"
                                value={editedRow.name}
                                onChange={handleChange}
                                className="border px-2 py-1 w-full"
                                />
                            ):(
                                row.name
                            )}
                            </td>
                            <td className="border px-4 py-2">
                            {editIndex === index ? (
                                <input
                                name="name"
                                value={editedRow.email}
                                onChange={handleChange}
                                className="border px-2 py-1 w-full"
                                />
                            ):(
                                row.email
                            )}
                            </td>
                            <td className="border px-4 py-2">
                                {editIndex === index ?(
                                    <input
                                    name="age"
                                    value={editedRow.age}
                                    onChange={handleChange}
                                    className="border px-2 py-1 w-full"
                                    />
                                ):(
                                    row.age
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                {editIndex===index ?(
                                    <button
                                    onClick={handleSave}
                                    className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                                    >
                                        Save
                                    </button>
                                ):(
                                    <button
                                    onClick={()=>handleEdit(index)}
                                    className="btn btn-warning text-white px-2 py-1 mr-2 rounded"
                                    >
                                        Edit
                                    </button>
                                )}
                                <button
                                onClick={()=>handleDelete(index)}
                                className="btn btn-danger text-white px-2 py-1 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={exportToExcel}
            className="btn btn-success text-white p-4 py-2 rounded "
            >
                Export to Excel
            </button>
        </div>
    )
}
export default EditableTableExport;