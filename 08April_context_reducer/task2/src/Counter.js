import React,{act, useReducer} from "react";
//Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
//Define the intial state
const intialState = {count:0};
//DEfine the reducer funtion
function reducer(state,action){
    switch (action.type) {
        case INCREMENT:
            return{count: state.count+1};       
        case DECREMENT:
            return{count: state.count-1};       
        case RESET:
            return{count: 0};
    
        default:
            return state;
    }
}
function Counter(){
    const[state,dispatch] =useReducer(reducer,intialState);
    return(
        <div style={{textAlign:'center',marginTop:'50px'}}>
            <h1>useReducer Counter</h1>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch({type:INCREMENT})}>Increment</button>{''}
            <button onClick={()=>dispatch({type:DECREMENT})}>Decrement</button>{''}
            <button onClick={()=>dispatch({type:RESET})}>Reset</button>
        </div>
    );
}
export default Counter;