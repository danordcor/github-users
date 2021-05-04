import React from "react";
import { Navbar } from 'react-bootstrap';

function CustomNavbar(props) {
    return (
        <Navbar bg="dark" variant="dark" className="justify-content-center">
            <Navbar.Brand href="#home">
                {props.title}
            </Navbar.Brand>
        </Navbar>
    );
}
export default CustomNavbar;