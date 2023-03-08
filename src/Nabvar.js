import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from './img/logo.png'


function Nabvar() {
    const handleInicio= ()=>{
        window.locarion.href='/home'
    }
  return (
    <Navbar bg="Success" expand="lg" className='nav bg-success bg-dark' >
      <Container>
      <Button className='bg-transparent border-dark' onClick={handleInicio}>a <img src={image} width='100'/></Button>

        <div className="menu-item">
      </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-success fw-bold '>Inicio</Nav.Link>
            <Nav.Link href="#link" className='text-white fw-bold'>Nosotros</Nav.Link>
            <Nav.Link href="#link" className='text-white fw-bold'>Cultive Monitor</Nav.Link>
            <Nav.Link href="#link" className='text-white fw-bold'>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nabvar;