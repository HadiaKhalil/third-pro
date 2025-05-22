import { CircleCheck, Mail, Phone } from "lucide-react";
import Image from "next/image";
// import {   point } from "@/data";
import React from "react"; 

export default function Sec() {
  return (
    <div className="container">
      <div className="w-full grid lg:grid-cols-2 bg-[#fff] font-semibold text-[13px]">
        {/* 1st section */}
        <div className="lg:max-w-[560px] text-[#374151]">
          <h1 className="md:text-3xl text-xl text-blue-950 font-bold md:py-12 py-6">
            Over deze woning
          </h1>
          <p className="md:pb-6 pb-2">
            {`Geniet dagelijks van een fantastisch uitzicht vanuit uw appartement!`}
          </p>
          <p className="md:pb-10 pb-4 leading-6 lg:max-w-[550px]">
            {`Dit luxe 4-kamerappartement (88 m2) is gelegen op de 11e verdieping
            van het appartementencomplex "Uptown" (2016). De woning beschikt
            over 3 ruime slaapkamers, een luxe badkamer, toilet, berging, een
            royale, lichte woonkamer met open keuken en een zonnig balkon. De
            afwerking is zeer netjes, licht en eigentijds, u kunt er dus zo in!
            Uw auto parkeert u op uw eigen plek in de parkeergarage. In de
            onderbouw beschikt het appartement over een ruime berging.`}
          </p>
          <p className="text-[13px] md:pb-6 pb-2 leading-6">
            {`Ook de locatie is meer dan prima: Het appartementencomplex ligt aan
            de rand van Usselstein in de wijk IJsselveld, met alle voorzieningen
            (winkels, scholen, sportclubs) o`}
          </p>
          <p className="md:pb-8 pb-4">...</p>
          <button className="btn text-[15px] px-8 py-2 rounded mb-6">
            Meer lezen
          </button>
        </div>

        {/* 2nd section */}
        <div className="lg:pl-6 text-[#172554] font-bold">
          <h1 className="md:text-3xl text-xl lg:pt-12 lg:pb-10 pb-4">
            Ons team staat voor je klaar
          </h1>
          <div className="box-shadow-custom md:flex gap-12 items-center shadow-md rounded-lg md:pb-0 pb-4">
            <Image
              src="/images/WhatsApp Image 2025-05-22 at 10.06.07 AM.jpeg"
              alt="image"
              className="object-cover rounded-lg w-full md:w-[225px] h-auto"
              width={1920}
              height={1080}
            />

            <div className="md:pl-0 pl-4">
              <p className="text-[20px] md:pt-0 pt-4 mb-8">
                Neem contact met ons op
              </p>

              {/* Contact Information */}
              <div className="text-[16px] mb-2 flex gap-2 mt-2">
                <Phone className="text-[#7FFF00]" />
                <p>0306883480</p>
              </div>
              <div className="text-[16px] mb-10 flex gap-2">
                <Mail className="text-[#7FFF00]" />
                <p>info@aarendon.nl</p>
              </div>

              <div>
                {point.map((point, index) => (
                  <div key={index} className="flex items-center mb-2 gap-2">
                    <div style={{ color: point.textclass }}>
                      {typeof point.icon === "function"
                        ? React.createElement(point.icon, { className: "h-5 w-5" })
                        : point.icon}
                    </div>
                    <p className="text-[12px] text-[#374151]">{point.text}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="btn text-[15px] font-semibold px-8 py-4 rounded">
                  Contact opnemen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



const point = [
  {
    id: 1,
    text: `Gratis advies`,
    textclass: "#7FFF00",
    icon: <CircleCheck />,
  },
  {
    id: 2,
    text: `Persoonlijke aanpak`,
    textclass: "#7FFF00",
    icon: <CircleCheck />,
  },
  {
    id: 3,
    text: `Uitgebreide bezichtigingen`,
    textclass: "#7FFF00",
    icon: <CircleCheck />,
  },
];