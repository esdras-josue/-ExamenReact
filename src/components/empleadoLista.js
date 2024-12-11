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
            {empleados.map((emp) =>{
                <tr key ={empleado.id}>
                <td>{empleados.nombre}</td>
                <td>{empleados.dni}</td>
                <td>{empleados.direccion}</td>
                <td>{empleados.email}</td>
                </tr> 
            })}
        </tbody>
    </table>
);

export default ListaEmpleados;