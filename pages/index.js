
import Image from "next/image";
import { useState, useEffect } from "react";
function Hhi(image) {
  const [state, setState] = useState();
  


  const registerUser = event => {
    event.preventDefault() 
    setNumber(event.target.name.value)
    console.log(event.target.name.value + "BAM")
    getimage()
    
  }
  const [number, setNumber] = useState();
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
  
    <form onSubmit={registerUser}>
      <input className="bg-slate-500 p-4" id="name" type="text" placeholder="4706" required />
      <button className="bg-blue-500 p-2 rounded-full" type="submit">Register</button>
    </form>

        <div className="">
        <Image src="/shirt.png" width={400} height={500} alt="logo" className="w-full rounded-t-xl"/>
        </div>
       
        <div className="absolute bottom-36 right-24 w-2/6   lg:bottom-48 lg:right-32    ">
       {state && <Image src={state} width={150} height={150} alt="logo" className="w-full  rounded-sm"/> }
        </div>
        
    </div>
    </div>
    );
}
export default Hhi;



