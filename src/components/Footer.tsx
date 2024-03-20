import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-sm">
          <p>Terms and Support</p>
        </div>
        <div className="flex space-x-4">
          {/* Add social media icons */}
          <img src="/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
          <img src="/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
          <img src="/snapchat-icon.png" alt="Snapchat" className="h-6 w-6" />
          <img src="/music-icon.png" alt="Music" className="h-6 w-6" />
        </div>
        <div>
          {/* Add email and whatsapp logo */}
          <p>info@flamingovibe.com</p>
          <img src="/whatsapp-logo.png" alt="WhatsApp" className="h-6 w-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
