import React from "react";

function Cartitems({ cartItem, remove, removeAll }) {
  return (
    <>
      {cartItem.length === 0 ? (
        <h4 className="text-center mt-4">
          <i class="bi bi-emoji-frown text-warning "></i>No items in cart
        </h4>
      ) : (
        <>
          {" "}
          <ol className="list-group list-group-numbered">
            {cartItem.map((items) => {
              return (
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{items.name}</div>
                    Rs.{items.price}
                  </div>
                  <button
                    className="badge btn btn-danger rounded-pill"
                    onClick={() => {
                      remove(items.id);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ol>
          <h4 className="text-end py-3  pe-2 border rounded">
            Total: Rs.
            {cartItem.reduce((prev, curr) => {
              return (curr = prev + curr.price);
            }, 0)}
          </h4>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-sm btn-danger " onClick={removeAll}>
              <i class="bi bi-trash3-fill"></i> Empty Cart
            </button>
            <button
              className="btn btn-sm btn-success ms-2"
              onClick={() => {
                alert("Page is under Construction" );
              }}
            >
              <i class="bi bi-cart-fill"></i> Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Cartitems;
