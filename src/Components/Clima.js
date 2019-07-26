import React from "react";

function Clima({ resultado }) {
    // extraer valores
    const { name, main } = resultado;

    if (!name) return null;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Clima de la ciudad {name}</h2>
                <p className="temperatura">
                    {parseInt(main.temp)} <span> &#x2103;</span>
                </p>
                <p>Témperatura máxima: {parseInt(main.temp_max)} &#x2103;</p>
                <p>Témperatura mínima: {parseInt(main.temp_min)} &#x2103;</p>
                <p>Humedad: {main.humidity}</p>
                <p>Presión: {main.pressure}</p>
            </div>
        </div>
    );
}

export default Clima;
