import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className={styles['nav-link']}>Home</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/login" className={styles['nav-link']}>Login</NavLink>
            <NavLink to="/register" className={styles['nav-link']}>Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
