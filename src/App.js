import { useState } from "react";
import AppForm from "./componente/AppForm";

function App() {
  ///////////READ/////////
  const [idActual, setIdactual] = useState('');
  const [docsBD, setDocsBD] = useState([]);

  ////////LECTURA A BD//////////////////
  const fnRead = () => {
    console.log("lesctura a BD");
  }

  ////////ELIMINAR//////////////////
  const fnDelete = () => {
    console.log("eliminar un registro");
  }


  return (
    <div style={{background:"greenyellow", width:"350px"}}>
      <AppForm {...{ idActual,setIdactual, fnRead }}/> 
    </div>
  );
}

export default App;
