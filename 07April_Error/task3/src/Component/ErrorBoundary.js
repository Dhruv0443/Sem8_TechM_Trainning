import React from "react";
import {Alert} from "react-bootstrap";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false, error:null};
    }
    //Update state when an error is caught
    static getDerivedStateFromError(error){
        return {hasError:true,error};
    }
    //Log error details
    componentDidCatch(error,errorinfo){
        console.error("Error caught by Error Boundary: ",error,errorinfo);
    }
    render(){
        if(this.state.hasError){
            return(
                <div className="container mt-5">
                <Alert variant="danger">
                    <Alert.Heading>Oops! Something went wrong.</Alert.Heading>
                    <p>{this.state.error?.message}</p>
                </Alert>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;