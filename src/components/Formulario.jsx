import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from 'react';

// ARROW FUNCTION
const Formulario = () =>{

    return(
        <div className="">
            <h2 className="">Seguimiento Usuarios</h2>

            <p className="">
                Añade usuarios y {" "}
                <span className="">Administralos</span>
            </p>

            <Form className="px-5">
                <Form.Group>
                    <Form.Label htmlFor="usuario" className="mb-3">Nombre{"   "}</Form.Label>

                    <Form.Control id="usuario" type="text" placeholder="Nombre del usuario" className=""/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="correo" className="">Correo{"   "}</Form.Label>

                    <Form.Control id="correo" type="email" placeholder="example: 1234@gmail.com" className=""/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="direccion" className="">Direccion{"   "}</Form.Label>

                    <Form.Control id="direccion" type="text" placeholder="example: sm77, mz17.." className=""/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="altuser" className="">Alta de usuario{"   "}</Form.Label>

                    <input id="altuser" type="date" className=""/>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="sintomas" className="">Sintomas{"   "}</Form.Label>

                    <Form.Control as="textarea" id="sintomas" type="data" placeholder="describe los sintomas" className=""/>
                </Form.Group>

                <Button type="submit" className="" value="Agregar Usuario" >Agregar Usuario</Button>
            </Form>
        </div>
    )
}
export default Formulario;