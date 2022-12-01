import { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import {
  Button, Col, Form, FormControl, FormLabel, Row, Spinner,
} from 'react-bootstrap';




function Login() {
  const title = 'Login';
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('')
  }, [email, pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: pass,
        }),
        credentials: 'include',
      });

      if (res.ok) {
        const { accessToken } = await res.json();
        localStorage.setItem('auth', accessToken);
        navigate('/dashboard');
      } 

    } catch (err) {
      setErrMsg(err);
    }

  };

  const handleUserChange = (e) => setEmail(e.target.value);
  const handlePassChange = (e) => setPass(e.target.value);


  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-auth text-center">
        <Form onSubmit={handleSubmit}>
          <i className="bi bi-file-lock-fill auth-icon my-4"/>
          <p ref={errRef}>Error</p>
          <p className="mb-3 fw-normal">
            Click <strong>Log in</strong> button to log into the admin console.
            Use <strong>admin</strong>:<strong>qwerty</strong> to log in.
          </p>
          <Form.Group className="form-floating" controlId="inputUsername">
            <FormControl type="email"
                         value={email}
                         className="form-control form-input-top"     
                         ref={userRef}
                         placeholder="Email"
                         onChange={handleUserChange}
                         required
            />
            <FormLabel>Username</FormLabel>
          </Form.Group>
          <Form.Group className="form-floating" controlId="inputPassword">
            <FormControl type="password"
                         value={pass}
                         className="form-control form-input-top"     
                         placeholder="Password"
                         onChange={handlePassChange}
                         required 
            />
            <FormLabel>Password</FormLabel>
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Log in
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Login;