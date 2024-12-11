import React from "react";

const ListaEmpleados = ({empleados}) =>(
    <table className="table table-striped">
        <thead>
        <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Direccion</th>
            <th>Email</th>  
        </tr>
        </thead>
        <tbody>
            {empleados.map((empleado) =>{
                <tr key ={worker.id}>
                <td>{empleado.nombre}</td>
                <td>{woempleadorker.dni}</td>
                <td>{empleado.direccion}</td>
                <td>{empleado.email}</td>
                </tr> 
            })}
        </tbody>
    </table>
);

export default ListaEmpleados;