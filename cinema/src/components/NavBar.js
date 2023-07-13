import React, {Fragment} from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import "../css/custom.scss"
import Logo from "../img/Logo.svg"
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const navigate= useNavigate()
    return (
        <Fragment>
            <Navbar className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#" onClick={()=>{navigate("/")}}>
                    <img
                        src={Logo}
                        width="280"
                        height="48"
                        className="d-inline-block align-top"
                        alt="Shift logo"
                    />
                </Navbar.Brand>
                    <Button className="custom-enter-button">Войти</Button>
                </Container>
            </Navbar>
        </Fragment>
    );
};

export default NavBar;