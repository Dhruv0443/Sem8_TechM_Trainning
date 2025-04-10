import withData from "./withData";

const UserList =({data})=>{
    <ul>
        {data.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
};

export default withData(UserList,"https://jsonplaceholder.typicode.com/users");