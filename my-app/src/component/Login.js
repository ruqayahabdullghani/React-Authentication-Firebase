import React from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { Link} from "react-router-dom";


function Login() {
  return (
    <>
    <Card>
    <Card.Body>
          <h2 className="text-center mb-4">LogIn</h2>

          <Form>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type='email' id="email"></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="password">password</Form.Label>
              <Form.Control type='password' id="password"></Form.Control>
            </Form.Group>

            <Button className="w-100 mt-3" type="submit">Log In</Button>
          </Form>
          <div className="w-100 text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
          </div>
      </Card.Body>
    </Card>

    <div className="w-100 text-center mt-2">
    Don't have an account? <Link to= "/">SignUp</Link>
    </div>
    </>
  )
}

export default Login