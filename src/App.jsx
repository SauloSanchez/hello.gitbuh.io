import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

function App() {

  const numero = 10;

  return (
    <div className="">
      
      <Container fluid>
        <Row className="">
          <Header />
        </Row>
        <Row>
          <Col>
            <Formulario />
          </Col>
          <Col>
            <ListadoPacientes />
          </Col>
        </Row>
      </Container>

    </div>
  )
}


export default App
