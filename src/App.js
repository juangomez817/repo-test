import logo from './logo.svg';
import './App.css';
import { peticionget } from './services/Axios';
import { useState,useEffect } from 'react';


function App() {
  const [lista,setLista]=useState([])
  useEffect(()=>{
    peticionget().then((res)=>{
    setLista(res)
    })},[]
  )
  return (
    <div className="App">
      <body>
        <h2>
          Test de Axios
        </h2>
        <ul>
         {
          lista.map((pokem, index)=>{
            return(<li key={index}>{pokem.name}:{pokem.url}</li>);
          }
          )
         }
        </ul>
      </body>
    </div>
  );
}

export default App;
