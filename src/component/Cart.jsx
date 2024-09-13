import React, { useState, useEffect } from "react";
import { FaArrowDown, FaStar, FaPercent } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import "./Product.css";
import "./Cart.css";
import toast from "react-hot-toast";
function Cart({ items }) {
  const [cartdata, setcartdata] = useState();
  const [totalprice, setTotalPrice] = useState(0);
  const [heartcolor, setheartcolor] = useState(false);
  const [countwish, setwishlist] = useState(0);
// console.log(items)

  function price(v) {
    return v.toFixed(0);
  }
  const removeFromCart = (id) => {
    // console.log(items);
  //   console.log(id);
  // console.log(items);
  
    // setTotalPrice((prev)=>prev - items[id].price);
    if(cartdata)
    {
      const updatedCartItems = cartdata.filter((chosen) => chosen.id !== id);
      setcartdata(updatedCartItems);
      // setTotalPrice(totalprice - items[id].price);
    }
    else{
      const updatedCartItems = items.filter((chosen) => chosen.id !== id);
      setcartdata(updatedCartItems);
      // setTotalPrice(totalprice - items[id].price);
    }
   
    }
  
  

  
  
  function dis(v, v1) {
    const p = (v1 - (v1 * v) / 100).toFixed(0);
    return p;
  }
  const paynow = () => 
  {
    toast.success("Order is Placed Successfully.")
  }
  const heartcount = () => {
    setheartcolor(!heartcolor);
    heartcolor ? setwishlist(countwish - 1) : setwishlist(countwish + 1);
    console.log(countwish);
  };

  useEffect(() => {
    // Calculate total price when items change
    const total = items.reduce((acc, item) => {
      const discountedPrice = parseFloat(dis(item.discountPercentage, item.price));
      return acc + discountedPrice;
    }, 0);
    setTotalPrice(total);
  }, [cartdata,items]);

  return (
    <div className="Cartlist1">
      {(cartdata||items).map((item) => (
        <div key={item.id} className="card">
          <div className="cardleft">
            <img src={item.images[1] || item.images[0]} alt="" />
            {/* <div onClick={heartcount} className={heartcolor ? "heart1" : "heart"}>
              <IoMdHeart fontSize={"25px"} />
            </div> */}
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
                  <FaArrowDown color={"blue"} />₹{price(item.price)}
                </del>
              </div>
              <div className="offer">${dis(item.discountPercentage, item.price)}</div>
              <div className="offer offer1" color={"black"}>
                {item.discountPercentage}
                <FaPercent fontSize={"12px"} /> Off
              </div>
              <div className="rating stock">{item.stock} Left</div>
            </div>
            <div className="ship">{item.shippingInformation}</div>
            <div className="delivery">{item.returnPolicy}</div>
            <button onClick={() => removeFromCart(item.id)} className="button">
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
      <div className="total-price">
        {console.log(cartdata)}
        
     { <div onClick={paynow} className="total">Order Now & Pay ₹{totalprice}</div>}
      </div>
    </div>
  );
  
}

export default Cart;
