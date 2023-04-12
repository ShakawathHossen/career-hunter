import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
         <footer className="bg-black py-8 text-center md:text-start ">
      <div className="container mx-auto md:w-9/12 w-11/12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-4">
        <div className="md:col-span-1">
          <h2 className="text-lg font-medium text-white mb-4">Career Hunter</h2>
          <p className="text-gray-400 mb-4">Career Hunter" is a concise term that encapsulates the act of actively seeking out and pursuing career opportunities with vigor and determination. </p>
          <img src='https://i.ibb.co/zHv0kMw/Group-9969.png' className='mx-auto md:mx-0' />
        </div>
        <div className="md:col-span-1 ">
          <h2 className="text-lg font-medium text-white mb-4">Company</h2>
          <ul className="text-gray-400">
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-lg font-medium text-white mb-4">Product</h2>
          <ul className="text-gray-400">
            <li>Prototype</li>
            <li>Plans & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-lg font-medium text-white mb-4">Support</h2>
          <ul className="text-gray-400">
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Partner</li>
            <li>Developers</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h2 className="text-lg font-medium text-white mb-4">Contact</h2>
          <ul className="text-gray-400">
            <li>524 Broadway , NYC</li>
            <li>+1 777 - 978 - 5570</li>
          </ul>
        </div>
      
      </div>
    </footer>
        </div>
    );
};

export default Footer;