import React from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { Link} from "react-router-dom";


function ForgotPassword() {
  return (
    <>
    <Card>
    <Card.Body>
          <h2 className="text-center mb-4">Resst Password</h2>

          <Form>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type='email' id="email"></Form.Control>
            </Form.Group>

            
            <Button className="w-100 mt-3" type="submit">Resst Password</Button>
          </Form>
          <div className="w-100 text-center mt-3">
          <Link to="/login">login</Link>
          </div>
      </Card.Body>
    </Card>

    <div className="w-100 text-center mt-2">
      Don't have an account? <Link to= "/">Sign Up</Link>
    </div>
    </>
  )
}

export default ForgotPassword