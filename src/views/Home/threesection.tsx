// import React from 'react'
// import Image from "next/image";


// const page = () => {
//   return (
//     <div className='container text-[#07076D]'>

  
//     <div className="flex flex-col lg:flex-row lg:gap-20 ">
 
//     <div className='w-full lg:w-[555px]'>
//       <img
//         src="/images/second pic.png"
//         alt="image"
//         className="object-cover rounded-lg w-full"
//         width={355}
//         height={120}
//       />
//     </div>
 
   
//     <div className="grid grid-cols-2 md:gap-20 gap-16  lg:w-[95%] w-full mt-8 mb-8">
   
//       <div>
//         <h3 className="font-semibold text-lg">Parkeergelegenheid</h3>
//         <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>{`Parkeergarage, op eigen terrein, op afgesloten terrein`}</p>
//       </div>
//       <div>
//         <h3 className="font-semibold text-lg">Tuin</h3>
//         <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>Geen tuin</p>
//       </div>
//       <div>
//         <h3 className="font-semibold text-lg">Ligging</h3>
//         <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>{`In woonwijk, vrij uitzich`}t</p>
//       </div>
//       <div>
//         <h3 className="font-semibold text-lg">Voorzieningen</h3>
//         <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)] '>{`Mechanische ventilatie, tv kabel, lift, schulpuil, natuurlijke ventilatie`}</p>
//       </div>
 

//       <div>
//         <h3 className="font-semibold text-lg">Isolatie</h3>
//         <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>{`Dakisolatie, muurisolatie, vloerisolatie, dubbel glas, hr glas`}</p>
//       </div>
//       <div>
//         <h3 className="font-semibold text-lg">Verwarming</h3>
//         <p className='text-[12px] border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>{`Cv ketel, vloerverwarming geheel`}</p>

//       </div>
//       <div>
//         <h3 className="font-semibold text-lg">Warm water</h3>
//         <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>Cv ketel</p>
//       </div>
//       <div>
//         <h3 className="font-semibold text-lg">CV-ketel</h3>
//         <p className='text-[12px]  border-b-[1px] border-[rgba(0, 0, 0, 0.3)]'>Intergas hre</p>
//       </div>
//     </div>
//   </div>
//   </div>
//   )
// }

// export default page


import Image from "next/image";

const Page = () => {
  
  return (
    <div className="container text-[#07076D]">
      <div className="flex flex-col lg:flex-row lg:gap-20 ">
        <div className="w-full lg:w-[555px]">
          <Image
            src="/images/second pic.png"
            alt="image"
            className="object-cover rounded-lg w-full"
            width={355}
            height={120}
          />
        </div>

        <div className="grid grid-cols-2 md:gap-20 gap-10 lg:w-[95%] w-full mt-8 mb-8">
          {points.map((point) => (
            <div key={point.id}>
              <h3 className="font-semibold sm:text-lg">{point.title}</h3>
              <p className="text-[12px] border-b-[1px] border-[rgba(0, 0, 0, 0.3)]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;




 
const points = [
  {
    id: 1,
    title: "Parkeergelegenheid",
    description: "Parkeergarage, op eigen terrein, op afgesloten terrein",
  },
  {
    id: 2,
    title: "Tuin",
    description: "Geen tuin",
  },
  {
    id: 3,
    title: "Ligging",
    description:  "In woonwijk, vrij uitzicht",
  },
  {
    id: 4,
    title:"Voorzieningen",
    description: "Mechanische ventilatie, tv kabel, lift, schulpuil, natuurlijke ventilatie" 
  },

  {
    id: 5,
    title:"Isolatie",
    description:"Dakisolatie, muurisolatie, vloerisolatie, dubbel glas, hr glas"
    },
    {
      id: 6,
      title: "Verwarming" ,
      description: "Cv ketel, vloerverwarming geheel"
    },
    {
      id: 7,
      title:  "Warm water" ,
      description:"Cv ketel"
    },
    {
      id: 8,
      title:   "CV-ketel" ,
      description: "Intergas hre" ,
    },
];
