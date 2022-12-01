import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./login.scss";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="login-wrapper">
      {/* login form */}
      <div className="login-cover">
        <img
          src="https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png"
          alt="login cover"
        />
      </div>
      <div className="login-form-wrapper">
        <div className="login-form">
      <Form>
        <h2>Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
       
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
           
          />
        </Form.Group>

        
        <Button className="login-btn">
          Login
        </Button>

        {/* Or text, display center */}
        <div className="or-text">
          <p className="">OR</p>
        </div>
      </Form>

      {/* Google login button */}
   
        <Button className="google-login-btn">
          <FcGoogle />
          <span>Sign in with Google</span>
        </Button>
      
      

   

        </div>
      </div>
    </div>
  );
};




export default Login;
