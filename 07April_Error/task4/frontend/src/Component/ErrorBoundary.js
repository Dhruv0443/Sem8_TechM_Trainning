import React from "react";
import {Alert} from "react-bootstrap";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false, error:null};
    }
    static getDerivedStateFromError(error){
        return {hasError:true,error};
    }
    componentDidCatch(error,errorinfo){
        console.error("Error caught by Error Boundary: ",error,errorinfo);
        //Send error to backend (fake API Example)
        fetch("https://localhost:5000/log-error",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                error:error.toString(),
                info: errorinfo.componentStack,
                time: new Date().toISOString(),
            }),
        }).catch(err=> console.error("Failed to error,err"));
    }
    render(){
        if(this.state.hasError){
            return(
                <div className="container mt-5">
                <Alert variant="danger">
                    <Alert.Heading>Oops! Something went wrong.</Alert.Heading>
                    <p>{this.state.error?.message}</p>
                    <hr/>
                    <p className="mb-0">We've been modified and are working on it.</p>
                </Alert>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;