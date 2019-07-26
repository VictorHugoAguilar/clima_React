import React, { useState } from "react";

// Importamos los componentes
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import Error from "./Components/Error";

function App() {
    // state principal
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [error, setError ] = useState(false);

    // Funcion que pasa los datos de la consulta desde el formulario

    const datosConsulta = datos => {
        // validad que ambos campos llegen
        if(datos.ciudad === '' || datos.pais === ''){
          
          setError(true);

          // un error
          return;
        }

        // Ciudad y pais existen, agregarlos al state
        setError(false);
        setCiudad(datos.ciudad);
        setPais(datos.pais);
    };

    // cargar un componente condicionalmente
    let componente;

    if(error){
      // si hay error lo muestra
      componente = <Error mensaje='Ambos campos son obligatorios' />

    }else{
      // mostrar clima
      componente = null;
    }

    return (
        <div className="App">
            <Header titulo="Clima React App" />
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <Formulario datosConsulta={datosConsulta} />
                        </div>

                        <div className="col s12 m6">
                            {componente}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
