import React from "react";

const contactForm = ({ contact, setContact }) => {

    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })

    }




    const handleSubmit = () => {
        
        /* Validación de datos */
        if (contact.nombre === '') {
            alert('Campos obligatorios están vacios')
            return
        }


        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact),
           
        }
        fetch('http://localhost:3000/api/contactos', requestInit)/* Metodo que realiza la consulta en el API*/
            .then(res => res.text())
            .then(res => console.log(res)) /* Envía los datos del API al State */
    
            setContact({ /* Reinicia el state */
                nombre:'',
                apellido:'',
                correo:'',
                telefono:0,
                celular:0,
                direccion:''
            })


    
        }


    return (
        <form onSubmit={handleSubmit} className="col-4">
            <div className="mb-3" >
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input name="apellido" onChange={handleChange} type="text" id="apellido" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input name="correo" onChange={handleChange} type="text" id="correo" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Telefono</label>
                <input name="telefono" onChange={handleChange} type="number" id="telefono" className="form-control"  />
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Celular</label>
                <input name="celular" onChange={handleChange} type="number" id="celular" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input name="direccion" onChange={handleChange} type="text" id="direccion" className="form-control" />
            </div>
            <button type="submit" className="btn btn-success btn-lg btn-block">Guardar</button>
        </form>
    );
}

export default contactForm;