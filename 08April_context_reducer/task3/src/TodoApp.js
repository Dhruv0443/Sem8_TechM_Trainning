import React,{useReducer,useState} from "react";
import {v4 as uuidv4} from 'uuid';
//Define action types
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
//Define the intial state
const intialState = [];
//DEfine the reducer funtion
function reducer(state,action){
    switch (action.type) {
        case ADD_TODO:
            return[
                ...state,
                {id:uuidv4(),text:action.payload,complete:false}
            ];       
        case TOGGLE_TODO:
            return state.map(todo=>
                todo.id===action.payload
                ?{...todo,complete:!todo.completed}
                :todo
            );       
        case DELETE_TODO:
            return state.filter(todo=>todo.id !== action.payload);
    
        default:
            return state;
    }
}
function TodoApp(){
    const[state,dispatch] =useReducer(reducer,intialState);
    const [input,setInput]=useState('');
    const handleAdd =()=>{
        if(input.trim()){
            dispatch({type: ADD_TODO,payload:input});
            setInput('');
        }
    };
    return(
        <div style={{textAlign:'center',marginTop:'40px'}}>
            <h1>Todo App(useReducer)</h1>
            <input type="text" value={input}
            onChange={e=>setInput(e.target.value)}
            placeholder="Enter todo"/>
            <button onClick={handleAdd}>Add</button>
            <ul style={{listStyle:'none', padding:0, marginTop:'20px'}}>
                {state.map(todo=>(
                    <li key={todo.id} style={{marginBottom:'10px'}}>
                        <span
                        onClick={()=>dispatch({type:TOGGLE_TODO,payload:todo.id})}
                        style={{
                            textDecoration:todo.completed?"linethrough":'none',
                            cursor:'pointer',
                            marginRight:'10px'
                        }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={()=>dispatch({type:DELETE_TODO,payload:todo.id})}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoApp;