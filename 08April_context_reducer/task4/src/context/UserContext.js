import {createContent, useReducer, useEffect, use} from "react";
const UserContext =createContent();
const userReducer =(state,action)=>{
    switch (action.type) {
        case "ADD_USER":
            return[...state,action.payload];
        case "UPDATE_USER":
            return state.map(user =>user.id ===action.payload.id? action.payload: user);
        case "DELETE_USER":
            return state.filter(user => user.id!== action.payload);    
        default:
            return state;
    }
};
export const UserProvider =({children})=>{
    const[state,dispatch] = useReducer(userReducer,[],()=>{
        const localData = localStorage.getItem("users");
        return localData? JSON.parse(localData):[];
    });
    useEffect(()=>{
        localStorage.setItem("users",JSON.stringify(state));
    },[state]);
    return(
        <UserContext.Provider value ={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext;