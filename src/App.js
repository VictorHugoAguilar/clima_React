import React, { useState, useEffect } from "react";

// Importamos los componentes
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import Error from "./Components/Error";
import Clima from "./Components/Clima";

function App() {
    // state principal
    const [ciudad, setCiudad] = useState("");
    const [pais, setPais] = useState("");
    const [error, setError] = useState(false);
    const [resultado, setResultado] = useState({});

    useEffect(() => {
        // prevenir ejecucion
        if (ciudad === "") return;
        consultarAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ciudad, pais]);

    // Funcion que pasa los datos de la consulta desde el formulario

    const datosConsulta = datos => {
        // validad que ambos campos llegen
        if (datos.ciudad === "" || datos.pais === "") {
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

    if (error) {
        // si hay error lo muestra
        componente = <Error mensaje="Ambos campos son obligatorios" />;
    } else if (resultado.cod === "404") {
        // si hay error lo muestra si no encuentra la ciudad
        componente = <Error mensaje={resultado.message} />;
    } else {
        // mostrar clima
        componente = <Clima resultado={resultado} />;
    }

    const consultarAPI = async () => {
        const appID = "fa13bf0bb17417bb7cc0a8e5128b69ef";
        const lang = "es";

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}&lang=${lang}&units=metric`;

        // consultar la url con fetch

        const respuesta = await fetch(url);

        const resultado = await respuesta.json();

        // Seteamos el resultado en el useState
        setResultado(resultado);
    };

    return (
        <div className="App">
            <Header titulo="Clima React App" />
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <Formulario datosConsulta={datosConsulta} />
                        </div>
                        <div className="col s12 m6">{componente}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
