import React from 'react'
import Rlogo from "./Rlogo";
import "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Banner() {
  return (
    <div className="container py-5">
      
          <div className="row   d-flex align-items-center justify-content-center">
            <div className="col-md-2">
                <Rlogo></Rlogo>
            </div>
            <div className="col-md-4 mt-4 text-white">
              <ul className="fs-3 fa-ul  d-flex flex-wrap align-contents-start " id="bannerList">
                <li>
                  <span className="fa-li text-success">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Best quality.
                </li>
                <li>
                  <span className="fa-li text-success">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Compare and order.
                </li>
                <li>
                  <span className="fa-li text-success">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  Always the best deal.
                </li>
              </ul>
            </div>
          </div>
        </div>
      
  );
}
export default Banner;
