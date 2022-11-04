import React from 'react'

const AppForm = (props) => {
    const camposRegistro = {nombre:"", edad:"", genero:""}
    const [objeto, setObjeto] = useState(camposRegistro);

    const controlarEstadodecambio = (e) => {
    };

    const controlSubmit = (e) => {
    };

    return (
        <div style={{background:"orange"}}>
        formulario AppForm.js
        </div>

    )
}

export default AppForm