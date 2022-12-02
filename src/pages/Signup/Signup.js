import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Col, Button, Form, FormControl, InputGroup, FormLabel, Spinner,
} from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";

import { emailPattern, namePattern } from "../../common/constants";

import "./signup.scss";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const alertOpts = useRef({ isShow: false, message: "" });

  const handleSignup = async (data) => {
    try {
      setIsLoading(true);
      // eslint-disable-next-line no-console
      const res = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataRes = await res.json();
      if (dataRes.id) {
        navigate("/login", { replace: true });
        setIsLoading(false);
      }
    } catch (err) {
      alertOpts.current = { isShow: true, message: err.message };
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>

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
            <Form className="row g-2" noValidate>
              <i className="bi bi-file-lock-fill auth-icon mt-3 text-center" />
              <p className="fw-normal text-center">
                Fill up the form and then click <strong>Sign up</strong> button
                to sign up.
              </p>
              <Form.Group as={Col} lg="6" controlId="inputFirstName">
                <FormLabel>First Name</FormLabel>
                <FormControl
                  type="text"
                  isInvalid={errors.name}
                  placeholder="First Name"
                  {...register("name", { required: true })}
                />
                <Form.Control.Feedback type="invalid">
                  First name is required
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} lg="6" controlId="inputLastName">
                <FormLabel>Last Name</FormLabel>
                <FormControl
                  type="text"
                  isInvalid={errors.lastname}
                  placeholder="Last Name"
                  {...register("surname", {
                    required: true,
                    pattern: namePattern,
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastname?.type === "required" &&
                    "Last name is required"}
                  {errors.lastname?.type === "pattern" &&
                    "No special characters allowed except hyphen"}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} lg="12" controlId="inputEmail">
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  isInvalid={errors.email}
                  placeholder="Email@domain.com"
                  {...register("email", {
                    required: true,
                    pattern: emailPattern,
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.type === "required" && "Email is required"}
                  {errors.email?.type === "pattern" && "Invalid email"}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} lg="12" controlId="inputPassword">
                <FormLabel>Password</FormLabel>
                <FormControl
                  type="password"
                  isInvalid={errors.password}
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    minLength: 5,
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.type === "required" &&
                    "Password is required"}
                  {errors.password?.type === "pattern" &&
                    "Password must be at least 5 characters long"}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                className="w-100 btn btn-lg btn-primary"
                type="button"
                disabled={isLoading}
                onClick={handleSubmit(handleSignup)}
              >
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  hidden={!isLoading}
                />
                <span className="px-2">Sign up</span>
              </Button>
            </Form>
            <div className="or-text">
              <p className="">OR</p>
            </div>
            <Button className="google-login-btn mt-2">
              <FcGoogle />
              <span>Sign in with Google</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;




