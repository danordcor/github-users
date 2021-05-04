import React from "react";
import {Button, Container, Navbar} from 'react-bootstrap';
import {withRouter} from "react-router-dom";

function CustomNavbar(props) {
    const onBack = () => {
        props.history.goBack();
    }
    const showBack = props.showBack
    return (
            <Navbar bg="dark" variant="dark" justify="true">
                {showBack && (
                    <Navbar.Brand>
                        <Button variant="dark" onClick={()=> onBack()}>{"< Back"}</Button>
                    </Navbar.Brand>
                )}
                <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-center">
                    <Navbar.Brand href="#home">
                        {props.title}
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default  withRouter(CustomNavbar);