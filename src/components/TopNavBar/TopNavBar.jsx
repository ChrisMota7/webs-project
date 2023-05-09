import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../TopNavBar/TopNavBar.css'

function ColorSchemesExample() {
  return (
    <>
    
        <div className='top'>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Championships</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Competitions</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    </>
  );
}

export default ColorSchemesExample;