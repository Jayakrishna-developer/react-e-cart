import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../Redux/Slice/wishListSlice";
import { addToCart } from "../Redux/Slice/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlistReducer);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishList(productId));
  };

  const handlecart = (product) => {
    dispatch(removeFromWishList(product.id));
    dispatch(addToCart(product));
  };

  return (
    <div style={styles.container}>
      <div style={{ margin: "50px" }}>
        <Row>
          {wishlist?.length > 0 ? (
            wishlist.map((product) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                xl={3}
                key={product.id}
                className="d-flex justify-content-center"
              >
                <Card className="rounded-3 mt-5" style={styles.card}>
                  <Link to={`/view/${product.id}`}>
                    <Card.Img
                      variant="top"
                      src={product.thumbnail}
                      style={styles.cardImage}
                    />
                  </Link>
                  <Card.Body style={styles.cardBody}>
                    <Card.Title style={styles.cardTitle}>
                      {product.title.slice(0, 15)}
                    </Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        className="btn border-0 fs-5"
                        style={styles.button}
                        aria-label="Remove from wishlist"
                        onClick={() => handleRemoveFromWishlist(product.id)}
                      >
                        <i className="fa-solid fa-trash text-danger"></i>
                      </Button>
                      <Button
                        className="btn border-0 fs-5"
                        style={styles.button}
                        aria-label="Add to cart"
                        onClick={() => handlecart(product)}
                      >
                        <i className="fa-solid fa-cart-shopping text-success"></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className="d-flex justify-content-center mt-5">
              <img
                src="https://krosfitsports.com/public/empty-cart.gif"
                alt="Empty wishlist"
                className="w-25"
              />
              <h1 className="text-danger mt-5">Your wishlist is empty...</h1>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "80vh",
    backgroundColor: "#f7f7f7",
  },
  card: {
    width: "100%",
    maxWidth: "300px",
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardImage: {
    height: "250px",
    objectFit: "cover",
  },
  cardBody: {
    padding: "15px",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    background: "transparent",
    color: "#333",
  },
};

export default Wishlist;
