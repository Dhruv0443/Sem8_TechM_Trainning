const withAuth =(WrappedComponent)=>{
    return function AuthenticatedComponent(props){
        const isAuthenticated = localStorage.getItem("auth")==="true";
        if(!isAuthenticated){
            return<h2>You must be logged in to veiw this page</h2>
        }
        return <WrappedComponent{...props}/>
    };
};
//Dashboard.js
const Dashboard =()=><h1>Welcome to DAshbaoard!</h1>
export default withAuth(Dashboard); //Protects the Dashboard