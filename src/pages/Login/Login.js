import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./login.scss";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("email", email);
    e.preventDefault();

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (data.accessToken) {
      navigate("/dashboard", { replace: true });
      localStorage.setItem("auth", data.accessToken);
    } else {
      alert("Invalid Credentials");
    }

    console.log(res);
  };

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
                value={email}
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button className="login-btn" onClick={handleSubmit}>
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
