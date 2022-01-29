import Image from "next/image";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import DomToImage from "dom-to-image";
import * as IPFS from "ipfs-core";
function Test(){
    
    const [state, setState] = useState("https://lh3.googleusercontent.com/HSd-_8zEi0azemgRoT67PxXPvGuk0RKoi9p6zFKgD9QOj-K6AdxhWNaO01YP8W_hpjpHlDwv1rdzB3zKMkwzp22_XPc82fUrz25q=s0");
    
    function screenshot(){
        var node = document.getElementById('my-node');
    
    DomToImage.toBlob(node).then(async function (blob) {
        // const hi = URL.createObjectURL(blob, 'my-node.png');
        
        const ipfs = await IPFS.create( {repo: 'ok' + Math.random()});
        const { cid } = await ipfs.add(blob);
        console.log(cid.toString());
        
        // console.log(hi);
    });
    }

    async function UploadToIpfs() {
        const Blob = await DataURIToBlob(Base64);
        const ipfs = await IPFS.create( {repo: 'ok' + Math.random()});
        const { cid } = await ipfs.add(Blob);
        console.log(cid.toString());
        return cid;
      }
      
  
    
    return (
        <div>
        <div className="flex justify-center pt-20">


        <div id="my-node" className="bg-red-500  h-full w-fit">
        <div className="">
        <Image src="/shirt.png" width={400} height={500} alt="logo" className="w-full rounded-t-xl"/>
        </div>
       
        <div className="absolute bottom-36 right-24 w-2/6   lg:bottom-[21rem] lg:right-[18.5rem]    ">
       {state && <Image src={"https://lh3.googleusercontent.com/HSd-_8zEi0azemgRoT67PxXPvGuk0RKoi9p6zFKgD9QOj-K6AdxhWNaO01YP8W_hpjpHlDwv1rdzB3zKMkwzp22_XPc82fUrz25q=s0"} width={150} height={150} alt="logo" className="w-full  rounded-sm"/> }
        </div>
        </div>



        </div>
        <button
            onClick={screenshot}
            className="bg-blue-500 p-8"
          >press to screenshot</button>
       
        </div>
    )
}
export default Test;