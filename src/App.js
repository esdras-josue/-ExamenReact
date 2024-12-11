import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListaEmpleados from './components/empleadoLista';
import ModalForm from './components/modalForm';
import './App.css';

const App =() =>{
  const [empleados, setEmpleados] = useState([]);

  useEffect(() =>{
    fetchEmpleados();
  }, [])

  const fetchEmpleados = async () =>{
    try{
      const response = await axios.get('https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado')
      setEmpleados([...empleados, response.data]);
    } catch(error){
      console.log("Error añadiendo empleado:", error);
    }
  };

  const addEmpleado = async (nuevoEmpleado) =>{
    try{
      const response = await axios.post('https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado', nuevoEmpleado);
      setEmpleados([...empleados, response.data]);
    }catch (error){
      console.error('Error añadiendo empelado', error);
    }
    
  };

  return(
    <div className="container mt-5">
      <h1 className='text-center'>Lista de Empleados</h1>
      <button className="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#employeeModal">
        Agregar Empleado
      </button>
      <ListaEmpleados empleados={empleados}/>
      <ModalForm onAdd={addEmpleado}/>
    </div>
  );
};



export default App;
