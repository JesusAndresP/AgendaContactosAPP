import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";

/* Tabla para mostrar los contactos de la agenda */
const ContactList = ({contact, contacts, setListUpdated, setContact }) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'

        }
        fetch('http://localhost:3000/api/contactos/' + id, requestInit)/* Metodo que realiza la consulta en el API*/
            .then(res => res.text())
            .then(res => console.log(res)) /* Envía los datos del API al State */
        setListUpdated(true)

    }

    const handleUpdate = id=>{
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)

        }
        fetch('http://localhost:3000/api/contactos/' + id, requestInit)/* Metodo que realiza la consulta en el API*/
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
        <table className="table border mt-8 ">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>APELLIDO</th>
                    <th>CORREO</th>
                    <th>TELEFONO</th>
                    <th>CELULAR</th>
                    <th>DIRECCION</th>
                </tr>

            </thead>
            <tbody> {/* Iteramos en la función masp */}
                {contacts.map(contact => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.nombre}</td>
                        <td>{contact.apellido}</td>
                        <td>{contact.correo}</td>
                        <td>{contact.telefono}</td>
                        <td>{contact.celular}</td>
                        <td>{contact.direccion}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(contact.id)} className="btn btn-danger">Eliminar</button>

                            </div>
                        </td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(contact.id)} className="btn btn-info">Actualizar</button>

                            </div>
                        </td>

                    </tr>

                ))}
            </tbody>

        </table>
    );
}
export default ContactList;