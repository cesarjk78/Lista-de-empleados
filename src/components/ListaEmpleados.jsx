import React from 'react';
import Empleado from './Empleado';

function ListaEmpleados() {
  const empleados = [
    { nombre: 'Laya Dueñas', puesto: 'CEO', departamento: 'Business', imagen: 'https://chapaesaflor.pe/infoblog/wp-content/uploads/img/xae8osa6ewevomipiloduma2y.jpg' },
    { nombre: 'Astryd Vallés', puesto: 'CMO', departamento: 'Marketing', imagen: 'https://i.pinimg.com/originals/9d/fd/64/9dfd64655126fdf9bfac80cab8b3f1e8.jpg' },
    { nombre: 'Shantell Meza', puesto: 'CFO', departamento: 'Business', imagen: 'https://alonsofotografia.com.br/wp-content/uploads/2020/07/foto-perfil-profissional-1024x683.jpg' },
    { nombre: 'Sergio Ocampo', puesto: 'CTO', departamento: 'IT', imagen: 'https://i.pinimg.com/originals/bd/95/47/bd9547b859fc4bc53d306997d8ed6b59.jpg' },
    { nombre: 'Ares Jiménez', puesto: 'Art Director', departamento: 'Marketing', imagen: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/gallery_big/public/media/image/2018/08/fotos-perfil-whatsapp.jpg?itok=rP3YgRRH' },
    { nombre: 'Marta Pérez', puesto: 'Frontend Dev', departamento: 'Engineering', imagen: 'https://i.pinimg.com/474x/94/dd/c1/94ddc1cf02d5344de68cce1f36faa83f.jpg' },
  ];

  return (
    <div className="lista-empleados">
      {empleados.map((empleado, index) => (
        <Empleado
          key={index}
          nombre={empleado.nombre}
          puesto={empleado.puesto}
          departamento={empleado.departamento}
          imagen={empleado.imagen}
        />
      ))}
    </div>
  );
}

export default ListaEmpleados;
