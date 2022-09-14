import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from "react-router-dom"
export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username), which provides the username to our parent component (child to parent communication) */
  e.preventDefault();
  axios.post('https://viniciustocchio-myflix.herokuapp.com/login', {},{params:{
    Username: username,
    Password: password
  }})
  .then(response => {
    const data = response.data;
    props.onLoggedIn(data);
  })
  .catch(e => {
    console.log('no such user')
  });

  

  };


return (

 <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
        </Button>
  <br></br>
                <p>
                  Need an account? <Link to={"/register"}>Sign up</Link>
                </p>
    </Form>

 
);
}