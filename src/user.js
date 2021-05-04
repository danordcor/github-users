import React from "react";
import {Col, Container, Image, ListGroup, Navbar, Row} from 'react-bootstrap';
import CustomNavbar from "./navbar";
import {useLocation} from "react-router-dom";

function User(props) {
    const {state} = useLocation();
    if(!state){
        return <p>Doesn't exist</p>
    }
    const detail = state.detail;
    return (
        <div>
            <CustomNavbar title="Person" showBack={true} />
            <ListGroup>
                <ListGroup.Item>
                    <Container>
                        <Row>
                            <Col xs={2} md={2}>
                                <Image src={detail.avatar_url} style={{width:50}} roundedCircle />
                            </Col>
                            <Col xs={10} md={10}>
                                <b>{detail.name}</b>
                                <p>{detail.location}</p>
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}
export default User;