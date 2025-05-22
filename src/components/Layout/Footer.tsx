import React from "react";

const Footer = () => {
  return (
    <footer className="container">
      <div className="border-b md:pt-16 pt-6 pb-16 text-[#07076D]">
        <hr className="pb-10" />

        {/* Grid Section */}
        <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-4 gap-10">
          {/* Column 1 */}
          <div>
            <h1 className="font-semibold text-lg mb-4">Kopen en verkopen</h1>
            <ul className="space-y-1 text-[12px]">
              <li>Aanbod</li>
              <li>Gratis woonscan</li>
              <li>Vrijblijvende waardebepaling</li>
              <li>Woning taxeren</li>
              <li>Huis aankopen</li>
              <li>Huis verkopen</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h1 className="font-semibold text-lg mb-4">Handige links</h1>
            <ul className="space-y-1 text-[12px]">
              <li>Over ons</li>
              <li>Ons team</li>
              <li>Meerwaarde met Era</li>
              <li>Nieuws</li>
              <li>Reviews</li>
              <li>Contact</li>
              <li>Werken bij</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="lg:mt-14">
            <h1 className="font-semibold text-lg mb-4">Contact</h1>
            <ul className="space-y-1 text-[12px]">
              <li>030-6883480</li>
              <li>info@aarendonk.nl</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="lg:mt-14">
            <h1 className="font-semibold text-lg mb-4">Openingstijden</h1>
            <ul className="space-y-1 text-[12px]">
              <li>Ma t/m vr van 09:00-17:30</li>
              <li>Sint Nicolaasstraat 1</li>
              <li>3401 BS Usselstein</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="flex justify-center items-center">
            <img
              src="/images/pic44.png"
              alt="Footer Image"
              className="object-contain"
              width={255}
              height={120}
            />
          </div>
        </div>

        <hr className="mt-10" />
      </div>
    </footer>
  );
};

export default Footer;
