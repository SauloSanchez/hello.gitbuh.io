import {useState} from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

function App() {

  const [usuarios,setUsuarios] = useState([]);

  

  return (
    <div className="">
      
      <Container fluid>
        <Row className="">
          <Header/>
        </Row>
        <Row>
          <Col>
            <Formulario 
              usuarios = {usuarios}
              setUsuarios = {setUsuarios}
              />
          </Col>
          <Col>
            <ListadoPacientes 
              usuarios = {usuarios}
              
            />
          </Col>
        </Row>
      </Container>

    </div>
  )
}


export default App
