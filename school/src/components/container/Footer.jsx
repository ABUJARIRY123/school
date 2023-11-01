import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 
      grid-cols-1 place-items-start gap-8 text-black">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            Manarata International School of Kenya, a center of naturing academy excellence.<br/>
         <b>Location:  Nairobi, Lavington, Ole Odume Road</b> 
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
Islamiyaat
            </a>
            <a href="" className="text-sm hover:underline">
Early Years          
            </a>
            <a href="" className="text-sm hover:underline">
              {" "}
Special Needs  
  </a>
  <a href="" className="text-sm hover:underline">
          Cambridge Primary

</a>
  <a href="" className="text-sm hover:underline">
          Cambridge Secondary

</a>
  <a href="" className="text-sm hover:underline">
A Levels
</a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Our School</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">
Privacy Policy           
 </a>
            <a href="" className="text-sm hover:underline">
              Sitemap
            </a>
            <a href="" className="text-sm hover:underline">
              Careers
            </a>
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow us</div>
          <div className="text-sm mb-4">manarat.misk@gmail.com</div>
          <div className="text-sm">+254795058718</div>
          <div className="flex gap-4 mt-4">
            <a href="" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            <a href="" className="hover:scale-110 text-xl">
              <BsWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;