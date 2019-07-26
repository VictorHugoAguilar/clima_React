import React from 'react';

// Importamos los componentes
import Header from './Components/Header';
import Formulario from './Components/Formulario';


function App() {
  return (

    <div className="App">

    <Header 
      titulo='Clima React App'
    />
    <div className="contenedor-form">
    <div className="container">
      <div className="row">
        <div className="col s12 m6">
          <Formulario />
        </div>

      </div>
    </div>

    </div>

    </div>
  );
}

export default App;
