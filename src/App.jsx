import { useState,useEffect } from 'react';
import './App.css'
import Navbar from './component/Navbar'
import Loader from './component/Loader';
import Slick from './component/Slick'
import Product from './component/Product';

function App() {
  const [Url,setUrl]=useState();
  const [data,setData]=useState(null);
  const [lod,setloader]=useState(true)
  const [Filter,setfilter]=useState(null);
  const [clone,setClone]=useState(null)
  const [search,setSearch]=useState("");
  const [getrating,setrating]=useState(null);
  const [count ,setCount]=useState(5);
 

  async function fetchdata(Url="") {
    let api=`https://dummyjson.com/products${Url}`
    const response = await fetch(api);
    const data =await response.json();
    setData(data.products);
    data&&setloader(false); 
  }
  // console.log(Url);
  useEffect(() => {
    fetchdata();
    
  }, []); 


  const filterfun=(Filter,getrating,dis)=>
  {
    if(Filter)
    {
        if(Filter=="lessthen500")
        {
          const temp=[...data]
        const filterdata=temp.filter((value)=>value.price<10);
        // console.log(filterdata);
        setClone(filterdata)
        }
        else if(Filter=="500to1000")
        {
          const temp=[...data]
          const filterdata=temp.filter((value)=>value.price>10&&value.price<50);
          // console.log(filterdata);
          setClone(filterdata)
        }
        else if(Filter=="1000to5000")
        {
          const temp=[...data]
          const filterdata=temp.filter((value)=>value.price>50&&value.price<100);
          // console.log(filterdata);
          setClone(filterdata)
        }
        else if(Filter=="5000to10000")
        {
          const temp=[...data]
          const filterdata=temp.filter((value)=>value.price>100&&value.price<500);
          // console.log(filterdata);
          setClone(filterdata)
        }
        else if(Filter=="greater10000"){
          const temp=[...data]
          const filterdata=temp.filter((value)=>value.price>500);
          // console.log(filterdata);
          setClone(filterdata)
        }
        else{
          setClone(null);
        }
      }
       else if(getrating){
        if(getrating>0)
          {
          const temp=[...data]
          const filterdata=temp.filter((value)=>Math.floor(value.rating)==getrating);
          // console.log(filterdata);
          setClone(filterdata)
          }
          else{
            setClone(null);
          }
       } 
       else{
        if(dis>0)
          {
          const temp=[...data]
          const filterdata=temp.filter((value)=>(value.discountPercentage)>=dis);
          // console.log(filterdata);
          setClone(filterdata)
          }
          else{
            setClone(null);
          }
       }
    // setClone(clone.length ? clone : []);
      
  }
 console.log(clone);
 const [dis,disPer]=useState(0);
  useEffect(() => {
    data&&filterfun(Filter,getrating,dis)

  }, [Filter||getrating||dis]); 
// console.log(Filter);
const pricerange=[
  {
    name:"lessthen500",
    name1:"Less then 10"
  },
  {
    name:"500to1000",
    name1:"10 to 50"
  },
  {
    name:"1000to5000",
    name1:"50 to 100"
  },
  {
    name:"5000to10000",
    name1:"100 to 500"
  },
  {
    name:"greater10000",
    name1:"greater then 1000"
  },
]
const DiscountP=[
  {
    name:"less then 5%",
    name1:5
  },
  {
    name:"less then 10%",
    name1:10
  },
  {
    name:"less then 15%",
    name1:15
  },
  {
    name:"less then 20%",
    name1:20
  }
]
const rating=[
  {
    name:1,
    name1:"1⭐Rating"
  },
  {
    name:2,
    name1:"2⭐Rating"
  },
  {
    name:3,
    name1:"3⭐Rating"
  },
  {
    name:4,
    name1:"4⭐Rating"
  },
  {
    name:5,
    name1:"5⭐Rating"
  },
]
console.log(getrating);

  const [countwish,setwishlist]=useState(0);

  console.log(dis);
  
  return (
    
  <div className="main">
    
    <Navbar countwish={countwish} />
    <Slick/>
    {<Product  product={clone||data} countwish={countwish} setwishlist={setwishlist} key={data} setUrl={setUrl} lod={lod} setfilter={setfilter} pricerange={pricerange} rating={rating} fetchdata={fetchdata} search={search} setSearch={setSearch} disPer={disPer} clone={clone} setrating={setrating} DiscountP={DiscountP} />}

    {
     console.log(data)
    }
     {/* {clone && clone.length === 0 && (
       setPop(true)
      )} */}
  </div>
  )
}

export default App
