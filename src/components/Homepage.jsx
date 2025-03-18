import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Card,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const laptops = [
    {
      id: 1,
      brand: "ACER",
      name: "ACER Aspire Lite 16 AL16-51P-72S2",
      price: "15.990.000 đ",
      img: "https://nvs.tn-cdn.net/2023/08/laptop-asus-rog-flow-z13-gz301ze-ld6688w.jpg",
      specs: [
        "i7-1255U",
        "Intel Iris Xe",
        "16GB",
        "512GB",
        "16” WUXGA / IPS / 60Hz",
      ],
      discount: null,
    },
    {
      id: 2,
      brand: "DELL",
      name: "Dell Inspiron 16 5640 - 71053723",
      price: "22.790.000 đ",
      oldPrice: "24.990.000 đ",
      discount: "2.200.000 đ",
      img: "https://nvs.tn-cdn.net/2023/08/laptop-asus-rog-flow-z13-gz301ze-ld6688w.jpg",
      specs: [
        "Core i5 120U",
        "Intel Iris Xe",
        "16GB",
        "1TB",
        "16” WUXGA / WAV / 60Hz",
      ],
    },
    {
      id: 3,
      brand: "LENOVO",
      name: "Lenovo IdeaPad Slim 3 15ABR8",
      price: "14.490.000 đ",
      img: "https://nvs.tn-cdn.net/2023/08/laptop-asus-rog-flow-z13-gz301ze-ld6688w.jpg",
      specs: [
        "R5 5625U",
        "AMD Radeon",
        "16GB",
        "512GB",
        "15.6” Full HD / IPS / 300Hz",
      ],
      discount: null,
    },
    {
      id: 4,
      brand: "ASUS",
      name: "ASUS Zenbook 14 UM3406KA-PP555WS",
      price: "31.990.000 đ",
      img: "https://nvs.tn-cdn.net/2023/08/laptop-asus-rog-flow-z13-gz301ze-ld6688w.jpg",
      specs: ["R7 350", "AMD Radeon", "32GB", "512GB", "14” 3K OLED / 120Hz"],
      discount: null,
    },
    {
      id: 5,
      brand: "MSI",
      name: "MSI Katana 15 B13UDX-2269VN",
      price: "22.990.000 đ",
      oldPrice: "26.790.000 đ",
      discount: "3.800.000 đ",
      img: "https://nvs.tn-cdn.net/2023/08/laptop-asus-rog-flow-z13-gz301ze-ld6688w.jpg",
      specs: [
        "i7-13620H",
        "GeForce RTX 3050",
        "16GB",
        "1TB",
        "15.6” IPS / 144Hz",
      ],
    },
    {
      id: 6,
      brand: "GIGABYTE",
      name: "GIGABYTE G5 MF-F2VN313SH",
      price: "20.490.000 đ",
      img: "https://nvs.tn-cdn.net/2023/08/laptop-asus-rog-flow-z13-gz301ze-ld6688w.jpg",
      specs: [
        "i5-12500H",
        "RTX 4050",
        "16GB",
        "512GB",
        "15.6” Full HD / 144Hz",
      ],
      discount: null,
    },
    {
      id: 7,
      brand: "HP",
      name: "HP Victus 16-d1145TX",
      price: "27.990.000 đ",
      img: "https://nvs.tn-cdn.net/2023/08/laptop-asus-rog-flow-z13-gz301ze-ld6688w.jpg",
      specs: ["i7-12700H", "RTX 3060", "16GB", "1TB", "16.1” Full HD / 144Hz"],
      discount: null,
    },
    {
      id: 8,
      brand: "ACER",
      name: "ACER Predator Helios Neo 16",
      price: "35.490.000 đ",
      img: "https://nvs.tn-cdn.net/2023/08/laptop-asus-rog-flow-z13-gz301ze-ld6688w.jpg",
      specs: ["i7-13700HX", "RTX 4060", "16GB", "1TB", "16” WQXGA / 165Hz"],
      discount: null,
    },
  ];

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">T1 Legends</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Laptop"
                id="laptop-category"
                className="laptop-custom"
              >
                <NavDropdown.Item href="#">Acer</NavDropdown.Item>
                <NavDropdown.Item href="#">Dell</NavDropdown.Item>
                <NavDropdown.Item href="#">Lenovo</NavDropdown.Item>
                <NavDropdown.Item href="#">Asus</NavDropdown.Item>
                <NavDropdown.Item href="#">MSI</NavDropdown.Item>
                <NavDropdown.Item href="#">Gigabyte</NavDropdown.Item>
                <NavDropdown.Item href="#">HP</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="PC" id="pc-category" className="pc-custom">
                <NavDropdown.Item href="#">PC ASUS</NavDropdown.Item>
                <NavDropdown.Item href="#">PC Acer</NavDropdown.Item>
                <NavDropdown.Item href="#">PC Dell</NavDropdown.Item>
                <NavDropdown.Item href="#">PC HP</NavDropdown.Item>
                <NavDropdown.Item href="#">PC Lenovo</NavDropdown.Item>
                <NavDropdown.Item href="#">PC Intel</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Màn hình máy tính"
                id="mh-category"
                className="mh-custom"
              >
                <NavDropdown.Item href="#">ASUS</NavDropdown.Item>
                <NavDropdown.Item href="#">Acer</NavDropdown.Item>
                <NavDropdown.Item href="#">Dell</NavDropdown.Item>
                <NavDropdown.Item href="#">HP</NavDropdown.Item>
                <NavDropdown.Item href="#">Lenovo</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Phụ kiện"
                id="pk-category"
                className="pk-custom"
              >
                <NavDropdown.Item href="#">Chuột</NavDropdown.Item>
                <NavDropdown.Item href="#">Bàn phím</NavDropdown.Item>
                <NavDropdown.Item href="#">Tai nghe</NavDropdown.Item>
                <NavDropdown.Item href="#">Lót chuột</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="light" className="me-2">
              Đăng nhập
            </Button>
            <Button variant="warning">Đăng ký</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Banner */}
      <div
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage:
            "url('https://pbs.twimg.com/media/Ef-fky3WoAMMpNn.jpg:large')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      />

      <Container className="mt-4">
        <h3 className="text-center">Ưu đãi HOT</h3>
        <div className="d-flex justify-content-between flex-wrap gap-3">
          <Card style={{ width: "18rem" }} className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://lh3.googleusercontent.com/Kri3wxquBmLrP-TVaZIZxqr6vrUioIutTKzfZJXvd_WyOzxnWA_RXEzPOCU4tahDYQuKpEJ7dbFHKYY9dh9pOzo6sSGoi5Hd=w1000-rw"
            />
            <Card.Body>
              <Card.Title>Ưu đãi lên đến 500K khi mua màn hình MSI</Card.Title>
              <Button variant="primary">Xem ngay</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="m-2">
            <Card.Img
              variant="top"
              src="https://nvs.tn-cdn.net/2021/08/chuot-e-dra-em6102-1.jpg"
            />
            <Card.Body>
              <Card.Title>Combo Chuột và Bàn phím chỉ 299k</Card.Title>
              <Button variant="primary">Xem ngay</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className="m-2">
            <Card.Img
              variant="top"
              src="https://nvs.tn-cdn.net/2023/12/acer-aspire-7-a715-76-53pj.jpg"
            />
            <Card.Body>
              <Card.Title>Laptop Gaming giảm 20%</Card.Title>
              <Button variant="primary">Xem ngay</Button>
            </Card.Body>
          </Card>
        </div>
      </Container>

      {/* Danh sách laptop */}
      <Container className="mt-5">
        <h3 className="text-center mb-4">Danh sách laptop</h3>
        <Row>
          {laptops.map((laptop) => (
            <Col key={laptop.id} md={4} lg={3} className="mb-4">
              <Card className="h-100 d-flex flex-column shadow-sm">
                <Card.Img variant="top" src={laptop.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-uppercase">
                    {laptop.brand}
                  </Card.Title>
                  <Card.Text>{laptop.name}</Card.Text>
                  {laptop.discount && (
                    <Badge bg="purple" className="mb-2">
                      TIẾT KIỆM {laptop.discount}
                    </Badge>
                  )}
                  <h5 className="text-primary">{laptop.price}</h5>
                  {laptop.oldPrice && (
                    <del className="text-muted">{laptop.oldPrice}</del>
                  )}
                  <ul className="list-unstyled mt-2">
                    {laptop.specs.map((spec, index) => (
                      <li key={index} className="badge bg-light text-dark me-1">
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button variant="primary" className="w-100">
                      Thêm vào giỏ
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-4">
        © 2025 T1 Gaming | Vui lòng không copy.
      </footer>
    </div>
  );
};

export default HomePage;
