import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import productSlice from "../Redux/Slice/productSlice";
import { addToWishList } from "../Redux/Slice/wishListSlice";
import { addToCart } from "../Redux/Slice/cartSlice";

function View() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { loading } = useSelector((state) => state.productReducer);
  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    setProduct(products?.find((product) => product?.id == id));
  }, [id]);

  const handleWishlist = (product) => {
    const existingProduct = wishlist.find((item) => item?.id == product?.id);
    if (existingProduct) {
      alert("Product already exists in wishlist");
    } else {
      dispatch(addToWishList(product));
    }
  };

  const handlecart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mt-5" style={styles.container}>
      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" variant="info" />
        </div>
      ) : (
        <div className="row w-75" style={styles.row}>
          <div className="col-lg-4 mt-5" style={styles.imageContainer}>
            <img src={product?.thumbnail} alt="" style={styles.productImage} />
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-6" style={styles.detailsContainer}>
            <p style={styles.productId}>Pid: {product?.id}</p>
            <h1 style={styles.productTitle}>{product?.title}</h1>
            <h5 style={styles.productPrice}>
              Price: <span className="text-danger">${product?.price}</span>
            </h5>
            <p style={styles.productDescription}>{product?.description}</p>
            <div className="d-flex justify-content-between mt-4">
              <Button
                style={styles.wishlistButton}
                className="border-0"
                onClick={() => handleWishlist(product)}
              >
                <i className="fa-solid fa-heart text-danger me-1 fs-3"></i>
              </Button>
              <Button
                style={styles.cartButton}
                className="border-0"
                onClick={() => handlecart(product)}
              >
                <HiShoppingCart className="me-1 text-success fs-3" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #f9f9f9 50%, #ececec 100%)",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
  },
  row: {
    margin: "auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
  },
  imageContainer: {
    border: "2px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    background: "#f5f5f5",
  },
  productImage: {
    width: "100%",
    borderRadius: "8px",
  },
  detailsContainer: {
    textAlign: "left",
    paddingLeft: "20px",
  },
  productId: {
    fontSize: "14px",
    color: "#888",
  },
  productTitle: {
    fontWeight: "bold",
    fontSize: "32px",
    color: "#333",
  },
  productPrice: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#555",
  },
  productDescription: {
    fontSize: "16px",
    color: "#666",
  },
  wishlistButton: {
    background: "transparent",
    color: "#ff6b6b",
    border: "1px solid #ff6b6b",
    borderRadius: "50%",
    padding: "10px",
    transition: "all 0.3s ease",
  },
  cartButton: {
    background: "transparent",
    color: "#4caf50",
    border: "1px solid #4caf50",
    borderRadius: "50%",
    padding: "10px",
    transition: "all 0.3s ease",
  },
};

export default View;
