import React from "react";
import {Col, Container, Image, ListGroup, Navbar, Row} from 'react-bootstrap';
import CustomNavbar from "./navbar";

function User(props) {
    return (
        <div>
            <CustomNavbar title="Person" />
            <ListGroup>
                <ListGroup.Item>
                    <Container>
                        <Row>
                            <Col xs={2} md={2}>
                                <Image src="https://avatars.githubusercontent.com/u/12878064?v=4" style={{width:50}} roundedCircle />
                            </Col>
                            <Col xs={10} md={10}>
                                <b>Daniel Orozco</b>
                                <p>https://github.com/danordcor</p>
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
export default User;