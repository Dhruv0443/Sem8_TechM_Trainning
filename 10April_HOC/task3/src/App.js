import React,{useEffect,useState} from "react";
import withLoading from "./component/withLoading";
import DataComponent from "./component/DataComponent";

const DataWithLoading = withLoading(DataComponent);
const App=() =>{
  const [loading,setLoading]=useState(true);
    const [data,setData]=useState([]);
    useEffect(()=>{
      //Simulate fetching data
      setTimeout(() => {
        setData(["item1","item2","item3",]);
        setLoading(false);
      }, 2000);
    },[]);

  return (
      <div className="App">
      <h1>Higher-Order Component</h1>
      <DataWithLoading isLoading={loading} data={data}/>
    </div>
  );
}

export default App;
