import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../Redux/Slice/productSlice";
import Spinner from "react-bootstrap/Spinner";
import { addToWishList } from "../Redux/Slice/wishListSlice";
import { addToCart } from "../Redux/Slice/cartSlice";
import "./Home.css"; // Import custom CSS

function Home() {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.productReducer);
  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleWishlist = (product) => {
    const existingProduct = wishlist.find((item) => item?.id === product?.id);
    if (existingProduct) {
      alert("Product already exists in the wishlist");
    } else {
      dispatch(addToWishList(product));
      alert("Product added to wishlist");
    }
  };

  const handleCart = (product) => {
    const existingProduct = cart?.find((item) => item.id === product.id);
    if (existingProduct) {
      dispatch(addToCart(product));
      alert("Item added");
    } else {
      dispatch(addToCart(product));
      alert("Product added to cart");
    }
  };

  return (
    <div className="mt-5 container">
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <Row className="mt-5">
          {products?.length > 0 ? (
            products.map((product) => (
              <Col
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mt-5"
              >
                <Card className="custom-card">
                  <Link to={`/view/${product.id}`}>
                    <Card.Img
                      variant="top"
                      className="custom-card-img"
                      src={product.thumbnail}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{product.title.slice(0, 15)}</Card.Title>
                    <Card.Text>{product.description.slice(0, 20)}</Card.Text>
                    <Card.Text className="text-danger">{product.price}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button
                        className="btn btn-light"
                        variant="primary"
                        onClick={() => handleWishlist(product)}
                      >
                        <i
                          className="fa-sharp fa-solid fa-heart fa-fade"
                          style={{ color: "#fb0921" }}
                        ></i>
                      </Button>

                      <Button
                        onClick={() => handleCart(product)}
                        className="btn btn-light"
                        variant="primary"
                      >
                        <i
                          className="fa-solid fa-cart-shopping fa-shake"
                          style={{ color: "#813dff" }}
                        ></i>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className="fw-bolder mt-5 mb-5">
              <p className="text-danger">Nothing to Display</p>
            </div>
          )}
        </Row>
      )}
    </div>
  );
}

export default Home;
