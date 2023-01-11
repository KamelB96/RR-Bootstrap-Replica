import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button  from 'react-bootstrap/Button';

function TopBar() {
    return (
<Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src= "https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="Instacart Logo" align="left" /> 
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
        </Nav>
        <Nav>
        <Button variant="success"><Nav.Link href="#LogIn">Log In</Nav.Link></Button>
            <Button variant="success">Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar>
    )}

    export default TopBar