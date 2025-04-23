import React, { useEffect, useState } from "react";
import axios from 'axios';
const withDataFetch = (WrappedComponent,url)=>{
    return function DataFetcher(props){
        const[data,setData] = useState([]);
        const[loading,setLoading] = useState(true);
        const[error,setError] = useState("");
        useEffect(()=>{
            axios.get(url).then((res)=>{
                setData(res.data);
                setLoading(false);
            })
            .catch((err)=>{
                setError(err.message);
                setLoading(false);
            });
        },[url]);
        return(
            <WrappedComponent {...props}
            data ={data} loading = {loading}
            error = {error}/>
        );
    };
};
export default withDataFetch;