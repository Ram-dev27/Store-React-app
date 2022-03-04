import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./component/Cards";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resp = await data.json();
    setData(resp);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      Fetch API project
      <Cards data={data}/>
    </div>
  );
}

export default App;
