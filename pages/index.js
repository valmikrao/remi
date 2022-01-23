
import Image from "next/image";
import { useState, useEffect } from "react";
function Hhi(image) {
  const [state, setState] = useState("https://lh3.googleusercontent.com/HSd-_8zEi0azemgRoT67PxXPvGuk0RKoi9p6zFKgD9QOj-K6AdxhWNaO01YP8W_hpjpHlDwv1rdzB3zKMkwzp22_XPc82fUrz25q");
  

  function changeHandler(event) {
    setNumber(event.target.value);
    getimage()
  }
  const [number, setNumber] = useState("4707");
    async function getimage(){
        const res = await fetch(`https://api.opensea.io/api/v1/asset/0x26badf693f2b103b021c670c852262b379bbbe8a/${number}/?format=json`)
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

        <div className="">
        <Image src="/shirt.png" width={400} height={500} alt="logo" className="w-full rounded-t-xl"/>
        </div>
       
        <div className="absolute bottom-36 right-24 w-2/6   lg:bottom-48 lg:right-32    ">
        <Image src={state} width={150} height={150} alt="logo" className="w-full  rounded-sm"/>
        </div>
        
    </div>
    </div>
    );
}
export default Hhi;



