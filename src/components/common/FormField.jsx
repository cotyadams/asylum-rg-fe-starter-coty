import React from "react";

function FormField ({label, name, value, onChange}) {
    return (
        <div className="form-node-container">
            <label className='label' htmlFor={label}>{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                className="input"
            />
        </div>
    );
}

export default FormField;