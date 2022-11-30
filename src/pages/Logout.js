import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Spinner } from 'react-bootstrap';

import useAuth from '../hooks/useAuth';

import './auth.css';

function Logout() {
  const title = 'Logout';

  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setAuth, user, auth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const res = await fetch('/api/v1/auth/logout', {
        method: 'GET',
        credentials: 'include',
      });

      if (res.status === 204) {
        console.log('logout successful');
        setAuth(null);
        console.log(auth);
        console.log(user);
        navigate('/');
      }
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert(`failed to logout: ${err}`);
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-auth text-center">
        <Form noValidate>
          <i className="bi bi-file-lock-fill auth-icon my-4"/>
          <p className="mb-3 fw-normal">Click <strong>Log out</strong> button to log out and navigate back to home.</p>
          <Button className="w-100 btn btn-lg btn-primary"
                  type="button"
                  disabled={isLoading}
                  onClick={handleLogout}
          >
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" hidden={!isLoading} />
            <span className="px-2">Log out</span>
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Logout;