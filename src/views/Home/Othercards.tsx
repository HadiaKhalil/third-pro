import React from 'react'
import { SquareDashed, Clock7, DoorOpen } from 'lucide-react';
import Image from 'next/image';
export default function Othercards() {
    return (
        <div className="container">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 items-center gap-6 sm:pt-14 mb-10">
                {points.map((point) => (
                    <div key={point.id} className="flex flex-col bg-[#f5f6f7] rounded text-[#969eac] ">

                        {point.imageSrc && (
                            <div className="mb-2 ">
                                <Image
                                    src={point.imageSrc}
                                    alt="Image"
                                    className="rounded-t-md object-cover rounded-lg w-full"
                                    width={400}
                                    height={120}
                                />
                            </div>
                        )}
                {point.item?.map((item, index) => (
                            <div key={index}>
                                <div className="text-[15px] border-b-[1px] pl-4 pb-4 pt-2 leading-6 border-[rgba(0, 0, 0, 0.3)] mb-2">
                                    {item.text && <p>{item.text}</p>}
                                    {item.value && <p className="text-[#7FFF00]">{item.value}</p>}
                                </div>


                                {item.icons && (
                                    <div className="mb-2 grid grid-cols-3">
                                        {item.icons.map((icon, iconIndex) => (
                                            <div
                                                key={iconIndex}
                                                className="flex items-center space-x-2 px-2 py-1"
                                            >
                                                <icon.icon className="h-4 w-4 text-[#d2f3b2]" />
                                                <p className="text-[10px]">{icon.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

    
    const points = [
        {
            id: 1,
            item: [
                {
                    icons: [
                        { icon: SquareDashed, text: '37 m²' },
                        { icon: DoorOpen, text: '2 kamers' },
                        { icon: Clock7, text: '1 maand te koop' },
                    ],
                    text: '3432 GL, Nieuwegein',
                    value: '€ 225.000,-k.k.'
                },
            ],
            imageSrc: '/images/09.png',
        },
        {
            id: 2,
            item: [
                {
                    icons: [
                        { icon: SquareDashed, text: '77 m²' },
                        { icon: DoorOpen, text: '4 kamers' },
                        { icon: Clock7, text: '20 maand te koop' },
                    ],
                    text: '3581 WB, Utrecht',
                    value: '€ 375.000,- k.k.'
                },
            ],
            imageSrc: '/images/10.png',
        },
        {
            id: 3,
            item: [
                {
                    icons: [
                        { icon: SquareDashed, text: '133 m²' },
                        { icon: DoorOpen, text: '6 kamers' },
                        { icon: Clock7, text: '30 maand te koop' },
                    ],
                    text: '3402 BA, Ijsselstein',
                    value: '€ 450.000,- k.k.'
                },
            ],
            imageSrc: '/images/11.png',
        },
    ];


