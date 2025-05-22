 import React from 'react'
 import Image from "next/image";
 import { DoorOpen, SquareDashed } from 'lucide-react';

 const Hero = () => {
   return (
      <>
      <div className='container'>
       <div className=' w-full  grid lg:gap-0 gap-6 lg:grid-cols-2 items-center   md:mt-36 mt-6 md:mb-10 mb-8 '>
         <div>
           <button className='bg-[#07C907] px-4 py-2  rounded text-[11px] text-white '>Te koop</button>
           <h1 className=' font font-bold sm:text-5xl text-3xl mt-2   '>Cape Kennedy 59</h1>
           <p className='text-[14px] text-gray-400'>{`2402DD, Ijsselstein`}</p>
           <div className='flex gap-8 mt-3 text-[14px]'>
             <div className='flex items-center'>
               <div className='text-[#7aad7a]'>
               <SquareDashed />
              </div>
             <p >88 m²</p> 
             </div>
             <div className='flex items-center'>
               <div className='text-[#7aad7a]'>
               <DoorOpen  />
           </div>
             <p> 4 Kamers</p> 
             </div>
          
           </div>
           <div className='flex gap-4 mt-3'>
             <p className='text-[#07C907]  text-[20px]'>{`€ 450.000,- k.k.`}</p>
             <p className='underline underline-offset-4 text-[#020203] text-[16px]'>kan ik dit huis betalen?</p>
           </div>
         </div>
         <div className=''>
           <Image
             src="/images/pic1.png"
             alt="Cape Kennedy 59"
             className="object-cover rounded-lg w-full" 
             width={545} 
             height={300} 

           />
         </div>
      
       </div>
       </div>
     </>
   );
 }

 export default Hero;







