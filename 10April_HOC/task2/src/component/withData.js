import { useEffect,useState } from "react";
const withData =(WrappedComponent,url)=>{
    return function DataFetcher(props){
        const [data,setData] = useState(null);
        const [loading,setLoading] = useState(true);

        useEffect(()=>{
            fetch(url)
            .then((res)=>res.json)
            .then((json)=>{
                setData(json);
                setLoading(false);
            });
        },[url]);
        if(loading) return <p>Loading....</p>
        return <WrappedComponent data={data}{...props}/>
    };
};
export default withData;