import React from "react";
import * as XLSX from 'xlsx';
import {saveAs} from 'file-saver';
import 'bootstrap/dist/css/bootstrap.min.css';
const TableToExcel =()=>{
    const tableData =[
        {id:1,name:'John Doe',email:'john.doe@gmail.com',age:25},
        {id:1,name:'Dev',email:'dev@gmail.com',age:27},
        {id:1,name:'Dhruv',email:'dhruv123@gmail.com',age:22},
    ];
    const exportToExcel =()=>{
        //Step1 : Convert JSON to worksheet
        const worksheet = XLSX.utils.json_to_sheet(tableData);
        //Step2 : Create a workbook and append the worksheet
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook,worksheet,'Users');
        //Step3 : Write the workbook to binary array
        const excelBuffer = XLSX.write(workbook,{
            bookType:'xlsx',
            type:'array'
        });
        //Step4 : Save the file using file-saver
        const data = new Blob([excelBuffer],{type:'application/octet-stream'});
        saveAs(data,'UserData.xlsx');
    };
    return(
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">User Table</h2>
            <table className="border w-full mb-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((user)=>(
                        <tr key={user.id}>
                            <td className="border px-4 py-2">{user.id}</td>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td className="border px-4 py-2">{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={exportToExcel} className="bg-green  px-4 py-2 rounded hover:bg-green">
                Export to Excel
            </button>
        </div>
    );
};
export default TableToExcel;