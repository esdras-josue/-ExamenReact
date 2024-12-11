import React from 'react';

const Entrada = ({label, type, value, onchange}) =>{
    <div className='"mb-3'>
        <label className="form-label">{}label</label>
        <input
        type={type}
        className='form-control'
        value={value}
        onChange={onchange}
        required
        />
    </div>
};

export default Entrada;
