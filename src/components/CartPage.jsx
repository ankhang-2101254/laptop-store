  import React, { useState } from "react";
  import { Container, Row, Col, Button, Card, Image, Form, Alert } from "react-bootstrap";
  import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

  export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [voucher, setVoucher] = useState("");
    const [discount, setDiscount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const [orderConfirmed, setOrderConfirmed] = useState(false);

    const increaseQuantity = (id) => {
      setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };

    const decreaseQuantity = (id) => {
      setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
    };

    const removeItem = (id) => {
      setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const applyVoucher = () => {
      if (voucher === "GIAM10") {
        setDiscount(totalPrice * 0.1);
      } else {
        setDiscount(0);
      }
    };

    const handlePayment = () => {
      if (cartItems.length === 0) return;
      if (paymentMethod === "cod") {
        setOrderConfirmed(true);
      } else if (paymentMethod === "momo") {
        window.location.href = "https://momo.vn/";
      }
    };

    return (
      <Container className="mt-5">
        <h2>
          <FaShoppingCart className="me-2" /> Giỏ hàng của bạn
        </h2>

        {orderConfirmed && (
          <Alert variant="success">
            ✅ Đơn hàng đã được xác nhận! Bạn sẽ thanh toán khi nhận hàng.
          </Alert>
        )}

        <Row className="mt-4">
          <Col md={8}>
            <Card className="p-3">
              {cartItems.length === 0 ? (
                <p>Chưa có sản phẩm trong giỏ hàng.</p>
              ) : (
                cartItems.map((item) => (
                  <Row key={item.id} className="align-items-center mb-3">
                    <Col xs={3}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col xs={6}>
                      <h5 className="mb-1">{item.name}</h5>
                      <p className="mb-1 text-muted">{item.brand} - {item.specs}</p>
                      <p className="mb-0 text-primary">{item.price.toLocaleString()}đ</p>
                    </Col>
                    <Col xs={3} className="text-end">
                      <div className="d-flex align-items-center justify-content-end">
                        <Button variant="light" size="sm" onClick={() => decreaseQuantity(item.id)}>
                          <FaMinus />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button variant="light" size="sm" onClick={() => increaseQuantity(item.id)}>
                          <FaPlus />
                        </Button>
                        <Button variant="danger" size="sm" className="ms-2" onClick={() => removeItem(item.id)}>
                          <FaTrash />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                ))
              )}
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-3">
              <h4>Tổng tiền: {totalPrice.toLocaleString()}đ</h4>
              <Form.Group className="mt-3">
                <Form.Control
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  value={voucher}
                  onChange={(e) => setVoucher(e.target.value)}
                />
                <Button variant="secondary" className="w-100 mt-2" onClick={applyVoucher}>
                  Áp dụng
                </Button>
              </Form.Group>

              {discount > 0 && (
                <p className="text-success mt-2">Bạn được giảm: {discount.toLocaleString()}đ</p>
              )}

              <h4 className="mt-3">Tổng sau giảm giá: {(totalPrice - discount).toLocaleString()}đ</h4>

              <Form.Group className="mt-3">
                <Form.Label><strong>Chọn phương thức thanh toán:</strong></Form.Label>
                <Form.Check
                  type="radio"
                  label="Tiền mặt khi nhận hàng (COD)"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="Thanh toán qua MoMo"
                  name="payment"
                  value="momo"
                  checked={paymentMethod === "momo"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
              </Form.Group>

              <Button 
                variant="primary" 
                className="w-100 mt-3" 
                disabled={cartItems.length === 0}
                onClick={handlePayment}
              >
                Thanh toán
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }