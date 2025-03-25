import React from 'react'
import { useState } from 'react'
const Calculator =()=>{
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");
    const[operator,setOperator]=useState("+");
    const[result,setResult]=useState(null);

    const calculate=()=>{
        let res;
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        if(isNaN(n1)||isNaN(n2)){
            setResult("Invalid Input");
            return;
        }
        switch (operator) {
            case "+":
                res= n1+n2;
                break;
            case "-":
                res= n1-n2;
                break;
            case "*":
                res= n1*n2;
                break;
            case "/":
                res= n2!==0? n1/n2:"Cannot divide by zero";
                break;
            default:
                res="Invalid Operator";
        }
        setResult(res);
    };
    return (
        <div>
            <h2 className=''>Simple Calculator</h2>
            <input 
            type='number'
            placeholder='Enter frist number'
            value={num1}
            onChange={(e)=>setNum1(e.target.value)}
            />&emsp;
            <select value={operator} 
            onChange={(e)=>setOperator(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>&emsp;
            <input
            type='number'
            placeholder='Enter second Number'
            value={num2}
            onChange={(e)=>setNum2(e.target.value)}
            />
            <br/><br/>
            <button onClick={calculate}>Calculate</button>
            {result!==null && <h3>Result: {result}</h3>}
        </div>
    );
};

export default Calculator;