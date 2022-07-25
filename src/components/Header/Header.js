import "./Header.scss";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../../redux/action/accoutnAction";

const Header = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        window.location.href = `${process.env.REACT_APP_BACKEND_SSO_LOGIN}?serviceURL=${process.env.REACT_APP_SERVICE_URL}`;
    }
    const handleLogout = () => {
        dispatch(doLogout());
    }
    const user = useSelector(state => state.account.userInfor);
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </Nav>
                        {
                            user && user.access_token &&
                            <Nav>
                                <Nav.Link href="#" >Welcome {user.username}</Nav.Link>
                            </Nav>
                        }

                        <Nav>
                            <NavDropdown title="Settings" id="basic-nav-dropdown">
                                {
                                    user && user.access_token ?
                                        <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
                                        :
                                        <NavDropdown.Item onClick={() => handleLogin()}>Login</NavDropdown.Item>
                                }

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    )
}

export default Header;