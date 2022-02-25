import React, { Fragment, useState, useEffect } from 'react'
import Navbar from './Components/Navbar';
import Form from './Components/contactForm';
import ContactList from './Components/ContactList';



function App() {

  const [contact, setContact] = useState({
    nombre:'',
    apellido:'',
    correo:'',
    telefono:0,
    celular:0,
    direccion:''
  })
    const [contacts, setContacts] = useState([])

    const [listUpdated, setListUpdated] = useState(false)

    useEffect(() => {
      const getContacts = () =>{
        fetch('http://localhost:3000/api/contactos')/* Metodo que realiza la consulta en el API*/
        .then(res => res.json())
        .then(res=>setContacts(res)) /* Envía los datos del API al State */

      }
      getContacts()
      setListUpdated(false)

    }, [listUpdated])
    



  return (
    <Fragment>
      <Navbar brand='Agenda de contactos'></Navbar>
      <div className="container"> {/* Crea un container */}
        <div className="row"> {/* Crea filas dentro del container*/}
          <div>
            <h2 style={{ textAlign: 'center' }}>Lista de contactos</h2>
            <ContactList contact={contact} setContact={setContact} contacts={contacts}  setListUpdated={setListUpdated}/>
            </div>
            <div>
              <h2 style={{ textAlign: 'left' }}>Formulario</h2>
              <Form contact={contact} setContact={setContact}/>
          </div>
        </div>
      </div>
    </Fragment>

  );

}

export default App;
