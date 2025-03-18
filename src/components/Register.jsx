import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  return (
    <div
      className="register-page"
      style={{
        backgroundImage:
          "url('https://www.pixground.com/league-of-legends-t1-skins-4k-wallpaper/?download-img=4k')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Card className="register-card p-4">
          <h3 className="text-center mb-4 text-blue">ĐĂNG KÝ</h3>
          <Form>
            <Form.Group controlId="formFullName" className="mb-3">
              <Form.Control type="text" placeholder="Họ và tên" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Control type="text" placeholder="Tên đăng nhập" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control type="password" placeholder="Mật khẩu" />
            </Form.Group>

            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
            </Form.Group>

            <Button
              variant="danger"
              type="submit"
              className="w-100 register-btn"
            >
              ĐĂNG KÝ
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
