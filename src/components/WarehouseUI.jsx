import { useState } from "react";
import { Card, Button, Form, Container, Row, Col, Table, Alert } from "react-bootstrap";

export default function Warehouse() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop Dell XPS 15", quantity: 10 },
    { id: 2, name: "MacBook Air M2", quantity: 5 },
    { id: 3, name: "Asus ROG Gaming", quantity: 8 },
  ]);

  const [newProduct, setNewProduct] = useState("");
  const [newQuantity, setNewQuantity] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [exportQuantity, setExportQuantity] = useState(0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [message, setMessage] = useState(null);

  const handleImportProduct = () => {
    if (!newProduct || newQuantity <= 0) {
      setMessage({ type: "danger", text: "Vui lòng nhập tên và số lượng hợp lệ!" });
      return;
    }

    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.name === newProduct);
      if (existingProduct) {
        return prevProducts.map((p) =>
          p.name === newProduct ? { ...p, quantity: p.quantity + parseInt(newQuantity) } : p
        );
      } else {
        return [...prevProducts, { id: prevProducts.length + 1, name: newProduct, quantity: parseInt(newQuantity) }];
      }
    });

    setMessage({ type: "success", text: `Đã nhập ${newQuantity} ${newProduct} vào kho!` });
    setNewProduct("");
    setNewQuantity(0);
  };

  const handleExportProduct = () => {
    if (!selectedProduct || exportQuantity <= 0) {
      setMessage({ type: "danger", text: "Vui lòng chọn sản phẩm và số lượng hợp lệ!" });
      return;
    }

    setProducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.name === selectedProduct);
      if (!existingProduct || existingProduct.quantity < exportQuantity) {
        setMessage({ type: "danger", text: "Số lượng không đủ để xuất kho!" });
        return prevProducts;
      }

      return prevProducts.map((p) =>
        p.name === selectedProduct ? { ...p, quantity: p.quantity - exportQuantity } : p
      );
    });

    setMessage({ type: "success", text: `Đã xuất ${exportQuantity} ${selectedProduct} khỏi kho!` });
    setSelectedProduct("");
    setExportQuantity(0);
  };

  return (
    <Container fluid className="py-4">
      <h1 className="text-center mb-4 text-primary">📦 Quản lý kho hàng</h1>

      {message && <Alert variant={message.type}>{message.text}</Alert>}

      <Row className="justify-content-center mb-4">
        <Col md={8} lg={10}>
          <Card className="p-4 shadow-sm">
            <h2 className="text-success text-center">📋 Danh sách sản phẩm</h2>
            <Table striped bordered hover className="mt-3">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng tồn kho</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center text-muted">
                      Chưa có sản phẩm trong kho.
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>


      <Row className="justify-content-center mb-4">
        <Col md={5} lg={5}>
          <Card className="p-4 shadow-sm">
            <h2 className="text-center text-primary">➕ Nhập sản phẩm</h2>
            <Form.Control
              placeholder="Tên sản phẩm"
              value={newProduct}
              onChange={(e) => setNewProduct(e.target.value)}
              className="mb-3"
            />
            <Form.Control
              placeholder="Số lượng"
              type="number"
              min={1}
              value={newQuantity}
              onChange={(e) => setNewQuantity(e.target.value)}
              className="mb-3"
            />
            <Button className="w-100" variant="success" onClick={handleImportProduct}>
              Nhập kho
            </Button>
          </Card>
        </Col>

        <Col md={5} lg={5}>
          <Card className="p-4 shadow-sm">
            <h2 className="text-center text-danger">➖ Xuất sản phẩm</h2>
            <Form.Select
              className="mb-3"
              onChange={(e) => setSelectedProduct(e.target.value)}
              value={selectedProduct}
            >
              <option value="">Chọn sản phẩm</option>
              {products.map((product) => (
                <option key={product.id} value={product.name}>
                  {product.name} ({product.quantity} còn lại)
                </option>
              ))}
            </Form.Select>
            <Form.Control
              placeholder="Số lượng"
              type="number"
              min={1}
              value={exportQuantity}
              onChange={(e) => setExportQuantity(e.target.value)}
              className="mb-3"
            />
            <Button className="w-100" variant="danger" onClick={handleExportProduct}>
              Xuất kho
            </Button>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} lg={10}>
          <Card className="p-4 shadow-sm">
            <h2 className="text-center text-info">📊 Thống kê</h2>
            <Form.Select onChange={(e) => setSelectedDate(e.target.value)} className="mb-3">
              <option value="">Chọn ngày</option>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={i + 1}>{i + 1}</option>
              ))}
            </Form.Select>
            <Form.Select onChange={(e) => setSelectedMonth(e.target.value)} className="mb-3">
              <option value="">Chọn tháng</option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i + 1}>Tháng {i + 1}</option>
              ))}
            </Form.Select>
            <Form.Select onChange={(e) => setSelectedYear(e.target.value)} className="mb-3">
              <option value="">Chọn năm</option>
              {[2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </Form.Select>
            <Button className="w-100" variant="info">
              Xem thống kê
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
