import React from 'react';
import "../styles/Empleado.css"; // Asegúrate de que la ruta sea correcta

function Empleado({ nombre, puesto, departamento, imagen }) {
  return (
    <div className="empleado">
      <img src={imagen} alt={`${nombre}`} className="empleado-imagen" />
      <div className="empleado-info">
        <h4>{nombre}</h4>
        <p>{puesto}</p>
        <span className={`badge badge-${departamento.toLowerCase()}`}>
          {departamento}
        </span>
      </div>
    </div>
  );
}

export default Empleado;
