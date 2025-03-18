import { Card, Button, Row, Col, Container } from "react-bootstrap";

const featuredProducts = [
  {
    id: 1,
    name: "Laptop gaming Lenovo LOQ 15IAX9",
    brand: "LENOVO",
    price: "20.990.000 đ",
    oldPrice: "24.490.000 đ",
    discount: "3.500.000 đ",
    img: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    name: "Laptop ACER Gaming Aspire 7 A715",
    brand: "ACER",
    price: "15.990.000 đ",
    oldPrice: "21.490.000 đ",
    discount: "5.500.000 đ",
    img: "https://example.com/image2.jpg",
  },
  {
    id: 3,
    name: "Laptop HP 15s-fq5228TU",
    brand: "HP",
    price: "9.990.000 đ",
    oldPrice: "11.990.000 đ",
    discount: "2.000.000 đ",
    img: "https://example.com/image3.jpg",
  },
  {
    id: 4,
    name: "Laptop Dell Latitude 3440",
    brand: "DELL",
    price: "16.990.000 đ",
    oldPrice: "18.990.000 đ",
    discount: "2.000.000 đ",
    img: "https://example.com/image4.jpg",
  },
  {
    id: 5,
    name: "Máy in Epson L3210",
    brand: "EPSON",
    price: "3.390.000 đ",
    oldPrice: "3.990.000 đ",
    discount: "600.000 đ",
    img: "https://example.com/image5.jpg",
  },
];

const acerLaptops = [
  {
    id: 6,
    name: "Laptop ACER Aspire Lite 16",
    brand: "ACER",
    price: "15.990.000 đ",
    img: "https://example.com/acer1.jpg",
  },
  {
    id: 7,
    name: "Laptop ACER Aspire 15",
    brand: "ACER",
    price: "12.990.000 đ",
    img: "https://example.com/acer2.jpg",
  },
  {
    id: 8,
    name: "Laptop ACER Nitro V ANV15",
    brand: "ACER",
    price: "22.990.000 đ",
    img: "https://example.com/acer3.jpg",
  },
  {
    id: 9,
    name: "Laptop ACER Swift 14 AI OLED",
    brand: "ACER",
    price: "39.990.000 đ",
    img: "https://example.com/acer4.jpg",
  },
  {
    id: 10,
    name: "Laptop ACER Swift X 14 AI OLED",
    brand: "ACER",
    price: "44.990.000 đ",
    img: "https://example.com/acer5.jpg",
  },
];

const Acerlist = () => {
  return (
    <Container>
      {/* Sản Phẩm Nổi Bật */}
      <div className="my-4">
        <h4 className="fw-bold">SẢN PHẨM NỔI BẬT</h4>
        <Row xs={1} md={5} className="g-4">
          {featuredProducts.map((product) => (
            <Col key={product.id}>
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <span className="badge bg-primary text-white mb-2">
                    TIẾT KIỆM {product.discount}
                  </span>
                  <Card.Title className="small text-uppercase text-muted">
                    {product.brand}
                  </Card.Title>
                  <Card.Text className="fw-bold">{product.name}</Card.Text>
                  <Card.Text className="text-primary fw-bold">
                    {product.price}
                  </Card.Text>
                  <Button variant="outline-primary" className="w-100">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Danh Sách Laptop Acer */}
      <div className="my-4">
        <h4 className="fw-bold">DANH SÁCH LAPTOP ACER</h4>
        <Row xs={1} md={5} className="g-4">
          {acerLaptops.map((product) => (
            <Col key={product.id}>
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title className="small text-uppercase text-muted">
                    {product.brand}
                  </Card.Title>
                  <Card.Text className="fw-bold">{product.name}</Card.Text>
                  <Card.Text className="text-primary fw-bold">
                    {product.price}
                  </Card.Text>
                  <Button variant="outline-primary" className="w-100">
                    Thêm vào giỏ
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Acerlist;
