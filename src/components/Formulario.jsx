import { useState, useEffect } from 'react';
import Error from './Error';

// ARROW FUNCTION
const formulario = ({usuarios, setUsuarios}) =>{

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion de formulario

        if([nombre, correo, direccion, fecha, sintomas].includes('')){
            console.log('Hay Al Menos un campo vacio');
            setError(true);
            return;
        }

        setError(false);
        const objetoUsuario = {
            nombre,
            correo,
            direccion,
            fecha,
            sintomas
        };
        //console.log(objetoPaciente);
        //setUsuarios(objetoPaciente);
        setUsuarios([...usuarios, objetoUsuario]); // agarra lo que tenga usuario en el hook y agregale el objeto abajo (array)
    
        // reiniciar el formulario
        setNombre('')
        setCorreo('')
        setDireccion('')
        setFecha('')
        setSintomas('')
    
    }

    return(
        <div className="">
            <h2 className="">Seguimiento Usuarios</h2>

            <p className="">
                Añade usuarios y {" "}
                <span className="">Administralos</span>
            </p>

            <form className="px-5" onSubmit={handleSubmit}>
                {error && <Error> Error: No ha llenado todos los campos </Error>}
                <div>
                    <label htmlFor="usuario" className="mb-3">Nombre{"   "}</label>

                    <input id="usuario" type="text" placeholder="Nombre del usuario" className="" value={nombre} onChange = {(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="correo" className="">Correo{"   "}</label>

                    <input id="correo" type="email" placeholder="example: 1234@gmail.com" className="" value={correo} onChange = {(e) => setCorreo(e.target.value)}  />
                </div>

                <div>
                    <label htmlFor="direccion" className="">Direccion{"   "}</label>

                    <input id="direccion" type="text" placeholder="example: sm77, mz17.." className="" value={direccion} onChange = {(e) => setDireccion(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="altuser" className="">Alta de usuario{"   "}</label>

                    <input id="altuser" type="date" className="" value={fecha} onChange = {(e) => setFecha(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="sintomas" className="">Sintomas{"   "}</label>

                    <input as="textarea" id="sintomas" type="data" placeholder="describe los sintomas" className="" value={sintomas} onChange = {(e) => setSintomas(e.target.value)} />
                </div>

                <button type="submit" className="" value="Agregar Usuario" >Agregar Usuario</button>
            </form>
        </div>
    )
}
export default formulario;