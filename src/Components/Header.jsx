import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../Redux/Slice/productSlice";
import "./Header.css";

function Header({ insideHome }) {
  const dispatch = useDispatch();
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartReducer);

  useEffect(() => {
    setWishlistCount(wishlist?.length);
    setCartCount(cart?.length);
  }, [wishlist, cart]);

  return (
    <Navbar expand="lg" className="bg" style={{ backgroundColor: "grey" }}>
      <Container>
        <Navbar.Brand href="#home">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <i
              className="fa-solid fa-cart-shopping fa-beat-fade me-1"
              style={{ color: "#63E6BE" }}
            ></i>
            E-CART
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button variant="primary" className="me-2 mt-3 mt-sm-3 mt-md-3">
              <Link
                to={"/wishlist"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <i
                  className="fa-sharp fa-solid fa-heart fa-fade me-1"
                  style={{ color: "#fb0921" }}
                ></i>{" "}
                WISHLIST <Badge bg="secondary">{wishlistCount}</Badge>
              </Link>
            </Button>
            <Button variant="primary" className=" me-2 mt-3 mt-sm-3 mt-md-3">
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <i
                  className="fa-solid fa-cart-shopping fa-shake me-2"
                  style={{ color: "#813dff" }}
                ></i>
                CART <Badge bg="secondary">{cartCount}</Badge>
              </Link>
            </Button>

            {insideHome && (
              <Form className="mt-3 mt-sm-0 mt-md-3">
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search Products"
                      className="search-button mr-sm-2"
                      onChange={(e) =>
                        dispatch(
                          searchProduct(e.target.value.toLocaleLowerCase())
                        )
                      }
                    />
                  </Col>
              
                </Row>
              </Form>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
