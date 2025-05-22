import React from 'react';
import Image from "next/image";
const Cards = () => {
  return (
    <div className="container">
      <div className="  text-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-20 gap-8 w-full mt-8 mb-1">
          {points.map((point) => (
            <div key={point.id}>
        
              <p className="circle font-semibold">{point.cercle}</p>
              {point.imagesrc && (
                <div className="w-full mt-8">
                  <Image
                    src={point.imagesrc}
                    alt={`Image ${point.id}`} 
                    className="object-cover rounded-lg w-full"
                    width={255}
                    height={120}
                  />
                </div>
              )}
              <h3 className="font-semibold text-black text-[21px] py-6">{point.description}</h3>
              <p className=" text-[#637381] text-[16px]  ">
                {point.description1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;

const points = [
  {
    id: 1,
    cercle: "1",
    imagesrc: '/images/work-one.png',
    description: 'Fill out your design brief and post a project',
    description1: 'Describe your business, answer a few simple questions and choose how much you,d like to pay.',
  },
  {
    id: 2,
    cercle: "2",
    imagesrc: '/images/work-two.png',
    description: 'Dozens of designers compete for your business',
    description1: 'Receive Dozens of designs made exclusively for you, provide feedback and get as many revisions as you want.',
  },
  {
    id: 3,
    cercle: "3",
    imagesrc: '/images/work-three.png',
    description: 'Pick the favorite, get complete ownership and download high quality files',
    description1: 'Choose the design you love the most, get all the source files and complete copyright and ownership of the design.',
  },
];
