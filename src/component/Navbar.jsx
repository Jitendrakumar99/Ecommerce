import React from 'react'
import './Navbar.css'
import { BsCart3 } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import { IoMdHeart } from "react-icons/io";
// import { useContext } from 'react'
// import { counterContext } from './Context'
// import './Card.css'
function Navbar(countwish) {
	// const value=useContext(counterContext)
	const obj=countwish;

	
  return (
	<div className='navbar'>
		  <div className='logo'><img src="creative.jpg" alt="" /></div>
	  <nav className="nav">
	    <NavLink className={(e=>{return e.isActive?"red":""})} to="/"><li>Home</li></NavLink>
		<NavLink className={(e=>{return e.isActive?"red":""})} to="/Product"><li>Product</li></NavLink>
		<NavLink className={(e=>{return e.isActive?"red":""})} to="/About"><li>About</li></NavLink>
	  </nav>
	   
		
		 <div className="right1">
			<div className="cardheart">
                  <div className="hearthead">  <div className="wishShow">{obj.countwish}</div> <IoMdHeart fontSize={"25px"}/> </div>
              </div>
		  <NavLink className={(e=>{return e.isActive?"red":""})} to="/Cart"><div className="cart"><BsCart3 /></div></NavLink> 
		  
		  
		  </div>
	</div>
  )
}

export default Navbar
