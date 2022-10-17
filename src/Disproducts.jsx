import React from "react";

function Disproducts({ item, addtocart, cartItem }) {
  let a=item.img;

  return (

    <div className="col mt-4 mb-4">
      <div className="card h-100 pt-5">
        <img
          className="card-img-top"
          src={a}
          height="50%"
          alt="..."
        />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item.name}</h5>
            <h6 className="fw-light">Rs.{item.price}</h6>
          </div>
          <div class="d-flex justify-content-center small text-warning">
          {item.rating.map(() => {
                return <div class="bi-star-fill"></div>
              })}
          </div>
        
          <div className="text-center">
            <button
              className="btn btn-dark mt-4"
              disabled={cartItem.some((obj) => obj.id === item.id)}
              onClick={() => {
                addtocart(item);
              }}
            >
              {cartItem.some((obj) => obj.id === item.id) ? (
                <i class="bi bi-emoji-laughing-fill text-white fw-bold">
                  {" "}
                  Added to cart
                </i>
              ) : (
                <i class="bi bi-cart-fill"> Add to cart</i>
              )}
            </button>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Disproducts;
