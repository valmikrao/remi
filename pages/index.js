
import Image from "next/image";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
function Hhi(image) {
  const [state, setState] = useState();
  
    function screenshot(){
      html2canvas((document.querySelector("#capture")), height="200").then(canvas => {
        document.body.appendChild(canvas)
    });
    
    }


  
   function changeHandler(event) {
     setNumber(event.target.value);
  }
  const registerUser = event => {
    event.preventDefault() // don't redirect the page
    // where we'll add our form logic
  }
  const [number, setNumber] = useState("4705");
    async function getimage(){
        const res = await fetch(`https://api.opensea.io/api/v1/asset/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/${number}/?format=json`)
        const data = await res.json()
        console.log(data.image_url);
        const image = data.image_url
        setState(image)
        console.log(state + "test");
    }



    useEffect(() => {
   getimage()
  }, [])
    
  console.log('hi' + state);
  return (
    <div className="p-8">
   
    <div className=" border-black border-4 w-fit relative  ">
  
    <input
            value={number}
            onChange={changeHandler}
            placeholder="Password"
            className=" w-1/2 h-3/6 px-4 py-1   mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
          ></input>

          <button
            onClick={getimage}
            className="bg-blue-500 p-8"
          >press to load</button>




<p>you selected: {number}</p>

<form action="/api/checkout" method="POST">
      <button className="bg-red-500 p-8" type="submit">Checkout</button>
    </form>


          
          <div id="capture" className="bg-black w-full h-full">
        <div className="">
        <Image src="/shirt.png" width={400} height={500} alt="logo" className="w-full rounded-t-xl"/>
        </div>
       
        <div className="absolute bottom-36 right-24 w-2/6   lg:bottom-48 lg:right-32    ">
       {state && <Image src={state} width={150} height={150} alt="logo" className="w-full  rounded-sm"/> }
        </div>
        </div>
        
    </div>

    <form action="/api/checkout" method="POST">
      <button className="bg-red-500 p-8" type="submit">Checkout</button>
    </form>


    </div>

    );
}
export default Hhi;



