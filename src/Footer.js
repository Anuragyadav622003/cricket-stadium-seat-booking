import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800  text-white p-4 fixed bottom-0 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p>&copy; 2023 Stadium Seat Booking</p>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <a href="#" className="text-gray-400 hover:text-white hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
