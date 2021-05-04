import React from "react";
import { Button, ListGroup } from 'react-bootstrap';
import CustomNavbar from './navbar'
import axios from "axios";
import {Link} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      users: ["User #1", "User #2", "User #3", "User #4", "User #5"]
    };
  }
  onChangeValue = event => {
    this.setState({ value: event.target.value });
  };
  componentWillMount =  () => {
    console.log(this.state);
    axios.get('https://api.github.com/users/danordcor').then(resp => {
      console.log(resp.data);
    });
  }

  onClick = () => {
    alert("redirect")
  }


  render() {
    const users = this.state.users;
    return (<div>
      <CustomNavbar title="Home" />
      <h2>Top 5 Github Users</h2>
      <p>Tap the username to see more information</p>
      <ListGroup horizontal>
        {users && users.map((user) =>
            <ListGroup.Item>
              <Button variant="primary" onClick={this.onClick}>{user}</Button>{' '}
            </ListGroup.Item>
        )}
      </ListGroup>
      <div>

      </div>
    </div>);
  }
}
export default App;
