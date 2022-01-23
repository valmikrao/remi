
import Image from "next/image";
import { useState, useEffect } from "react";
function Hhi(image) {
    

    async function getimage(){
        const number = "4707"
        const res = await fetch(`https://api.opensea.io/api/v1/asset/0x26badf693f2b103b021c670c852262b379bbbe8a/${number}/?format=json`)
        const data = await res.json()
        console.log(data.image_url);
        const image = data.image_url
        setState(image)
        console.log(state + "test");
    }
const me = "https://lh3.googleusercontent.com/HSd-_8zEi0azemgRoT67PxXPvGuk0RKoi9p6zFKgD9QOj-K6AdxhWNaO01YP8W_hpjpHlDwv1rdzB3zKMkwzp22_XPc82fUrz25q"
    useEffect(() => {
   getimage()
  }, [])
    const [state, setState] = useState("https://lh3.googleusercontent.com/HSd-_8zEi0azemgRoT67PxXPvGuk0RKoi9p6zFKgD9QOj-K6AdxhWNaO01YP8W_hpjpHlDwv1rdzB3zKMkwzp22_XPc82fUrz25q");

  console.log('hi' + state);
  return (
    <div>
    <div className=" border-black border-4 w-fit relative  ">
      

        <div className="">
        <Image src="/shirt.png" width={400} height={500} alt="logo" className="w-full rounded-t-xl"/>
        </div>
       
        <div className="absolute bottom-48 right-32  ">
        <Image src={state} width={150} height={150} alt="logo" className="w-full  rounded-sm"/>
        </div>
        
    </div>
    </div>
    );
}
export default Hhi;



