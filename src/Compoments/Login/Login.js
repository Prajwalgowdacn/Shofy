import { jwtDecode } from "jwt-decode";
import React, { useReducer } from "react";
import { Button, Container, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Jwt } from "jsonwebtoken";

const initialState = {
  email: "",
  password: "",
  error: "",
  userData: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_USER_DATA":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}

export const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:5001/login?email=${state.email}&password=${state.password}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      if (data.success) {

        alert("User logged in successfully");
        
        // dispatch({ type: "SET_USER_DATA", payload: data.user });
        window.location.href=('/profile')

      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

  return (
    <div className="login">
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col xs={12}>
            <Card
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <Card.Body className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                {state.error && <p className="text-danger">{state.error}</p>}
                <Form.Group className="mb-4 mx-5 w-100">
                  <Form.Label className="text-white">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    size="lg"
                    value={state.email}
                    onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-4 mx-5 w-100">
                  <Form.Label className="text-white">Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="password"
                      size="lg"
                      value={state.password}
                      onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
                    />
                  </InputGroup>
                </Form.Group>
                <p className="small mb-3 pb-lg-2">
                  <a href="#!" className="text-white-50">
                    Forgot password?
                  </a>
                </p>
                <Button variant="outline-light" className="mx-2 px-5" size="lg" onClick={handleLogin}>
                  Login
                </Button>
                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-white-50 fw-bold">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
