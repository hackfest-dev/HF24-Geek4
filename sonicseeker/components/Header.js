"use client" 
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
       const [isClick,setisClick] = useState(false);

       const toggleNavbar = () => {

        setisClick(!isClick);
       }
  return (
    <nav className='bg-black'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
             <div className='flex items-center justify-between h-16'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <a href = "/" className='text-white'>
                        Logo
                      </a>
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center space-x-4'>
                        <a href = "/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'> Home
                        
                        </a>
                         <a href = "/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'> Services
                        
                        </a>
                         <a href = "/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'> Contact
                        
                        </a>
                         <a href = "/" className='text-white hover:bg-white hover:text-black rounded-lg p-2'> About
                        
                        </a>
                    </div>
                  </div>
                  <div className='md:hidden flex items-center'>
                    <button className='inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ' onClick={toggleNavbar}/>

                  </div>
                   </div>
             </div>
    </nav>
  );
};

export default Navbar;