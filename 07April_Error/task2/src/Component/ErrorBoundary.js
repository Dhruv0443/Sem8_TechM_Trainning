import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={hasError:false};
    }
    //Update state when an error is caught
    static getDerivedStateFromError(error){
        return {hasError:true};
    }
    //Log error details
    componentDidCatch(error,errorinfo){
        console.error("Error caught by Error Boundary: ",error,errorinfo);
    }
    render(){
        if(this.state.hasError){
            return this.props.fallback ||<h2>Something went wrong.</h2>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;