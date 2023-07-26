import React, { useState } from "react";
import { Card , Button, Alert} from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';


function DashBored () {
  const {currentUser} = useAuth();
  const [error, setError] = useState("");
  const {logout} = useAuth();
  const navigate = useNavigate();
  const handleLogout = async() =>{
    setError("")
    try{
      await logout();
      navigate("/login")
      
    }catch{
      setError("Failed to log out")
    }
  }


  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email</strong>{currentUser && currentUser.email}

          <Link to={"update-profile"} className="btn btn-primary w-100 mt-3">
            Update Profile</Link>
            <div className="w-100 text-center mt-2">
              <Button className="btn btn-primary" onClick={handleLogout}>
                Log Out </Button></div>
          
        </Card.Body>
      </Card>
      </>
  )
}

export default DashBored 