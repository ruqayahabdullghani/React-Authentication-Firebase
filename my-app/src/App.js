import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import {Container} from "react-bootstrap";
import Signup from './component/Signup';
import Login from "./component/Login";
import ForgotPassword from "./component/ForgotPassword";
import UpdateProfile from './component/UpdateProfile';
import DashBored from './component/DashBored '
import AuthProvider from './context/AuthContext';


function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
      
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
          <Routes>
            <Route path="/signin" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />}/>
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/" element={<DashBored />} />
          </Routes>
          </AuthProvider>
        </Router>



      </div>

    </Container>
   
  );
}

export default App;
