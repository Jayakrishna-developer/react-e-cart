import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-muted"
      style={styles.footer}
    >
      {/* Social Media Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-light">
          <span>Connect with us on social media:</span>
        </div>

        <div>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" className="text-light" />
          </a>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" className="text-light" />
          </a>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon fab icon="google" className="text-light" />
          </a>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" className="text-light" />
          </a>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" className="text-light" />
          </a>
          <a href="#!" className="me-4 text-reset">
            <MDBIcon fab icon="github" className="text-light" />
          </a>
        </div>
      </section>

      {/* Links Section */}
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            {/* Company Name and About */}
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                <MDBIcon icon="shopping-cart" className="me-3" />
                E-Cart
              </h6>
              <p className="text-light">
                E-Cart is your one-stop destination for all your shopping needs,
                providing the best products at unbeatable prices with fast and
                reliable delivery.
              </p>
            </MDBCol>

            {/* Products Links */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Cart
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Wishlist
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  View Products
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Checkout
                </a>
              </p>
            </MDBCol>

            {/* Useful Links */}
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                Useful Links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Support
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help Center
                </a>
              </p>
            </MDBCol>

            {/* Contact Details */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-light">
                Contact
              </h6>
              <p className="text-light">
                <MDBIcon icon="home" className="me-2" />
                123 E-Commerce St, New York, NY 10001, USA
              </p>
              <p className="text-light">
                <MDBIcon icon="envelope" className="me-3" />
                support@e-cart.com
              </p>
              <p className="text-light">
                <MDBIcon icon="phone" className="me-3" /> +1 234 567 890
              </p>
              <p className="text-light">
                <MDBIcon icon="print" className="me-3" /> +1 234 567 891
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Footer Bottom */}
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <span className="text-light">
          © {new Date().getFullYear()} E-Cart | All rights reserved
        </span>
      </div>
    </MDBFooter>
  );
}

const styles = {
  footer: {
    backgroundColor: "#343a40",
    color: "#ffffff",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },
};
