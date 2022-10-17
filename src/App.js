import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-svg-core";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Disproducts from "./Disproducts";
import Cartitems from "./Cartitems";
import Footer from "./Footer";
function App() {
  let products = [
    {
      id: 1,
      name: "Camera",
      img: "./img/camera.jpg",
      price: 6999,
      rating:[0,0,0]

    },
    {
      id: 2,
      name: "Watch",
      img: "./img/watch.jpg",
      price: 3999,
      rating:[0,0,0,0,0]

    },
    {
      id: 3,
      name: "Phone",
      img: "./img/phone.jpg",
      price: 9999,
      rating:[0,0,]

    },
    {
      id: 4,
      name: "TV",
      img: "./img/tv.jpg",
      price: 4999,
      rating:[0,0,0]
    },
    {
      id: 5,
      name: "Laptop",
      img: "./img/laptop.jpg",
      price: 53999,
      rating:[0,0,0,0,0]

    },
    {
      id: 6,
      name: "Tablet",
      img:"./img/tablet.jpg",
      price: 12999,
      rating:[0,0,0,0]

    },
  ];
  const [cartItems, setcartItem] = useState([]);
  let addtocart = (item) => {
    setcartItem([...cartItems, item]);
  };
  let removefromCart = (item) => {
    const index = cartItems.findIndex((obj) => obj.id === item);
    cartItems.splice(index, 1);
    setcartItem([...cartItems]);
  };
  let removeAll = () => {
    setcartItem([]);
  };

  return (
    <>
      <Navbar></Navbar>
      <header className="bg-dark">
        <Banner></Banner>
      </header>
      <main>
        <div className="container-fluid px-4 px-lg-5 m-0" id="dispProducts">
          <div className="row m-0">
            <div className="col-9 ">
              <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                {products.map((items) => {
                  return (
                    <Disproducts
                      item={items}
                      addtocart={addtocart}
                      cartItem={cartItems}
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-3 ">
              <h4 className="text-center mt-4">
                <i className="bi-cart-fill me-1"></i>Cart
              </h4>
              <Cartitems
                cartItem={cartItems}
                remove={removefromCart}
                removeAll={removeAll}
              ></Cartitems>
            </div>
          </div>
        </div>
      </main>
      <footer class="py-5 bg-dark" id="#cart">
        <Footer />
      </footer>
    </>
  );
}

export default App;
