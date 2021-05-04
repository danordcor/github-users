import React from "react";
import {Button, Col, ListGroup, Row} from 'react-bootstrap';
import CustomNavbar from './navbar'
import axios from "axios";
import {Link, withRouter} from "react-router-dom";

const users = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    onChangeValue = event => {
        this.setState({value: event.target.value});
    };

    componentDidMount = () => {
        let retrived = []
        users.forEach((item, index) => {
            retrived.push(axios.get('https://api.github.com/users/' + item))
        })
        axios.all(retrived).then(axios.spread(async (...responses) => {
            let users = []
            await responses.forEach((response, item) => {
                users.push(response.data)
            })
            this.setState({users})
        })).catch(errors => {
            console.log(errors)
        })
    }

    onClick = (user) => {
        this.props.history.push({
            pathname: '/user',
            state: {detail: user}
        })
    }


    render() {
        const users = this.state.users;
        return (<div>
            <CustomNavbar title="Home" showBack={false}/>
            <h2>Top 5 Github Users</h2>
            <p>Tap the username to see more information</p>
            <ListGroup horizontal>
                <Row>
                    {users && users.map((user, index) =>
                        <ListGroup.Item key={index}>
                            <Button variant="primary" onClick={() => this.onClick(user)}>{user.name}</Button>{' '}
                        </ListGroup.Item>
                    )}
                </Row>
            </ListGroup>
            <div>
            </div>
        </div>);
    }
}

export default withRouter(App);
