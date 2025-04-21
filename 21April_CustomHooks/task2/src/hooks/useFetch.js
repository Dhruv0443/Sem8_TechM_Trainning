import { useEffect,useState } from "react";
const useFetch =(url,interval =5000)=>{
    const[data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const fetchData = async()=>{
        try{
            const response = await fetch(url);
            const json  = await response.json();
            setData(json);
        }catch(err){
            console.error('Fetch error:',err);
        }finally{
            setLoading(false);
        }
    };
    useEffect(()=>{
        fetchData();
        const id = setInterval(fetchData,interval);
        return()=>clearInterval(id);
    },[url,interval]);
    return {data,loading};
};
export default useFetch;