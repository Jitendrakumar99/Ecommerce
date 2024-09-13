import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import "./Product.css";
import "./Card.css";
import { FaStar } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { counterContext } from "./Context";

function price(v) {
  const pr = v.toFixed(0);
  return pr;
}
function dis(v, v1) {
  return (v1 - (v1 * v) / 100).toFixed(1);
}

function Card({ item, setid, setwishlist, countwish }) {
  // console.log(item);
  // const counter=useContext(counterContext)
  const setitemid = (id) => {
    setid(id);
    toast.success("Item is Added to Cart");
  };
  // toast.success("You are Successfully SignUp");
  const heartcount = () => {
    setheartcolor(!heartcolor);
    heartcolor ? setwishlist(countwish - 1) : setwishlist(countwish + 1);
    // console.log(countwish);
  };

  const [heartcolor, setheartcolor] = useState(false);
  return (
    <div key={item.id} className="card">
      <div className="cardleft">
        <img src={item.images[1] || item.images[0]} alt="" />
        <div onClick={heartcount} className={heartcolor ? "heart1" : "heart"}>
          <IoMdHeart fontSize={"25px"} />
        </div>
      </div>
      <div className="cardright">
        <div className="title">{item.title}</div>
        <div className="rating">
          {item.rating}
          <FaStar color={"white"} fontSize={"16px"} />
        </div>
        <div className="discount">
          <div className="price">
            <del>
              <FaArrowDown color={"blue"} />${price(item.price)}
            </del>
          </div>
          <div className="offer">
            ${dis(item.discountPercentage, item.price)}
          </div>
          <div className="offer offer1" color={"black"} >
            {item.discountPercentage}
            <FaPercent fontSize={"12px"} />
            Off
          </div>
          <div className="rating stock">{item.stock} Left</div>
        </div>
        <div className="ship">{item.shippingInformation}</div>
        <div className="delivery">{item.returnPolicy}</div>
        <button onClick={() => setitemid(item.id)} className="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
