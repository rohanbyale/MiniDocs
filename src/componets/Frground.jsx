import React, { useRef, useState } from 'react'
import Card from './Card'

const Frground = () => {
    const ref =useRef(null);
const data=[
    {
        desc:"ipsum dolor sit, amet consectetur adipisicing consectetur adipisicing" ,
         filesize:".9mb" ,
          close:true ,
           tag:{isOpen :true, tagTitle:"Download Now" , tagColor:"green"} ,
 },
    {
        desc:"ipsum dolor sit, amet consectetur adipisicing consectetur adipisicing" ,
         filesize:".9mb" ,
          close:true ,
           tag:{isOpen :true, tagTitle:"Download Now" , tagColor:"blue"} ,
 },
    {
        desc:"ipsum dolor sit, amet consectetur adipisicing consectetur adipisicing" ,
         filesize:".9mb" ,
          close:true ,
           tag:{isOpen :true, tagTitle:"upload" , tagColor:"blue"} ,
 },
];
  
  return (
     <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>
      
   {data.map((item,idx)=>(
<Card data={item} reference={ref} />
   ))}
  
     </div>
  )
}

export default Frground