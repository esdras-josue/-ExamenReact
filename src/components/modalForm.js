import React, { useState} from 'react';
import Entrada from './entrada';
import Swal from 'sweetalert2';

const ModalForm = ({onAdd}) =>{
    const [formData, setFormData] = useState({
        nombre: '',
        dni: '',
        direccion: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = () => {
        const { nombre, dni, direccion, email } = formData;
    
        if (!nombre || !dni || !direccion || !email) {
          Swal.fire('Error', 'Todos los campos son obligatorios.', 'error');
          return;
        }
    
        onAdd(formData);
        setFormData({ nombre: '', dni: '', direccion: '', email: '' });
        Swal.fire('Éxito', 'Empleado agregado correctamente.', 'success');
      };
    
      return (
        <div className="modal fade" id="employeeModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar Empleado</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <Entrada label="Nombre" type="text" value={formData.nombre} onChange={(e) => handleChange(e)} name="nombre" />
                <Entrada label="DNI" type="text" value={formData.dni} onChange={(e) => handleChange(e)} name="dni" />
                <Entrada label="Dirección" type="text" value={formData.direccion} onChange={(e) => handleChange(e)} name="direccion" />
                <Entrada label="Email" type="email" value={formData.email} onChange={(e) => handleChange(e)} name="email" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      );
};

export default ModalForm;