import React from "react";
const BankList =({records,editRecord,deleteRecord})=>{
    return(
        <table className="table table-bordered mt-3">
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Account Number</th>
                    <th>Balance</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.length ===0?(
                        <tr>
                            <td colSpan="4" className="text-center">No Records</td>
                        </tr>
                    ):(
                        records.map((rec,index)=> (
                            <tr key={index}>
                                <td>{rec.name} </td>
                                <td>{rec.accountNumber} </td>
                                <td>{rec.balance} </td>
                                <td>
                                    <button className="btn btn-warning btn-sm me-2" onClick={()=> editRecord(rec)}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={()=> deleteRecord(rec.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </table>
    );
};
export default BankList;