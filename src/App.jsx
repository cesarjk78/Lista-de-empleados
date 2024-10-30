import React from 'react';
import ListaEmpleados from './components/ListaEmpleados'; // Importa el componente ListaEmpleados
import './App.css'; // Asegúrate de que este archivo existe en tu proyecto

function App() {
  return (
    <div className="App">
      <h1>Lista de Empleados</h1>
      <ListaEmpleados /> {/* Aquí llamamos al componente ListaEmpleados */}
    </div>
  );
}

export default App;
