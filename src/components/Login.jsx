import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div
      className="vh-100 d-flex align-items-center justify-content-center bg-dark"
      style={{
        backgroundImage:
          "url('https://images4.alphacoders.com/134/1340828.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="d-flex justify-content-center align-items-center bg-black bg-opacity-50 w-100 h-100">
        <Card className="p-4 text-white bg-transparent border-0">
          <Card.Body className="p-4 rounded-lg bg-white bg-opacity-25">
            <Form>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Tên đăng nhập"
                  className="p-3 bg-white bg-opacity-20 text-white border-0"
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Mật khẩu"
                  className="p-3 bg-white bg-opacity-20 text-white border-0"
                />
              </Form.Group>

              <Button variant="danger" type="submit" className="w-100 py-2">
                ĐĂNG NHẬP
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
