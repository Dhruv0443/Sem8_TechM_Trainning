import { createContext, useReducer, useEffect } from "react";

const UserContext = createContext();

const userReducer = (state, action) => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.payload];
        case "UPDATE_USER":
            return state.map(user => user.id === action.payload.id ? action.payload : user);
        case "DELETE_USER":
            return state.filter(user => user.id !== action.payload);
        default:
            return state;
    }
};

// Initial state
const initialState = [];

// Context provider component
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        // Simulating fetching initial users
        const fetchUsers = async () => {
            const users = await fetch("/api/users").then(res => res.json());
            users.forEach(user => dispatch({ type: "ADD_USER", payload: user }));
        };
        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;