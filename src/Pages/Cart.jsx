import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart, removeFromCart } from "../Redux/Slice/cartSlice";

function Cart() {

    const cart = useSelector((state) => state.cartReducer);
    const dispatch=useDispatch()
 const[total,setTotal]=useState(0)

 useEffect(()=>{
  if(cart?.length>0){
    setTotal(cart?.map(product=>product.totalprice).reduce((p1,p2)=>p1+p2))
  }
  else{
    setTotal(0)
  }
 },[cart])
  return (
    <div className="container mt-5">
      {cart?.length > 0 ? (
        <div className="row mt-5">
          <div className="col-lg-8 ">
            <Table responsive="lg" className="table shadow text-center">
              <thead>
                <tr>
                  <th className="border p-2">#</th>
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Image</th>
                  <th className="border p-2">Quantity</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((product, index) => (
                  <tr>
                    <td className="border p-3">{index + 1}</td>
                    <td className="border p-3">{product.title}</td>
                    <td className="border p-3">
                      <img src={product.thumbnail} alt="" className="w-100" />
                    </td>
                    <td className="border p-3">
                      <input
                        type="text"
                        readOnly
                        style={{
                          width: "25px",
                          textAlign: "center",
                          border: "none",
                          fontWeight: "700",
                        }}
                        value={product?.quantity}
                      />
                    </td>
                    <td className="border p-3 text-danger fw-bolder">
                      {product.totalprice}
                    </td>
                    <td className="border p-3">
                      <Button
                        onClick={() => dispatch(removeFromCart(product?.id))}
                      >
                        <FaTrashAlt className="text-danger fs-6" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-between ">
              <button
                className="btn btn-outline-danger rounded-3 fw-bold"
                onClick={() => dispatch(emptyCart())}
              >
                Empty Cart
              </button>
              <Link to={"/"}>
                <button className="btn btn-outline-success rounded-3 fw-bold">
                  Shop More
                </button>
              </Link>
            </div>
          </div>

          <div className="col-lg-1"></div>

          <div className="col-lg-3 mt-md-5 mt-sm-5 ">
            <div className="container border rounded shadow p-5 w-100">
              <h3 className="fw-bold text-center">Cart Summary</h3>
              <p className="m-0 mt-4 fs-5">Total Products: {cart.length}</p>
              <p className="fs-5 ">
                Total: <span className="text-danger fw-bolder">{total}</span>
              </p>
            </div>
            <div className="d-grid">
              <button className="btn btn-success m-3 rounded shadow">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <img
            src="https://krosfitsports.com/public/empty-cart.gif"
            alt=""
            className="w-25"
          />
          <h1 className="text-danger mt-5">Your cart is empty...</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
