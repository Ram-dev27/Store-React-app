import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data,setData] = useState([])
  const getData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resp = await data.json();
    setData(resp);
  };
  useEffect(()=>{
    getData();
  },[])
  return <div className="App">Fetch API project</div>;
}

export default App;
