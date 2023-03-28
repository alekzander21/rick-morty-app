import { useEffect, useState } from "react";
import './App.css';
const App = () =>{
  const API_URL = 'https://rickandmortyapi.com/api/character';
  const [estado,setEstado] = useState([])
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setEstado(data.results));
  })
  return (
    <div className="App">
       {estado?.map(item =>(
      <div className="Cotainer_App">
      <img src={item.image} alt=''/>
      <li key={item.id}>{item.name}</li>
      <p>{item.species}</p>
      </div>
     ))}
    </div>
  );
}

export default App;
