<<<<<<< HEAD
import Link from "next/link";
import styles from "./Header.module.css";
=======
"use client" 
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
>>>>>>> f2279871a600cacb55f39667a3f9dcaf49622fc3

const Navbar = () => {
       const [isClick,setisClick] = useState(false);

       const toggleNavbar = () => {

        setisClick(!isClick);
       }
  return (
<<<<<<< HEAD
    <header className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logo}>
          <img className={styles.icon} src="logo/cue.png" alt="cue" />
          <h2 className={styles.name}>VoiceCue</h2>
        </div>
      </Link>
      <Link href="/features">
        <div className={styles.navItem}>
          <p className={`${styles.link} ${styles.page}`}>Features</p>
        </div>
      </Link>
      <Link href="/about">
        <div className={styles.navItem}>
          <p className={`${styles.link} ${styles.page}`}>About</p>
        </div>
      </Link>
    </header>
=======
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
>>>>>>> f2279871a600cacb55f39667a3f9dcaf49622fc3
  );
};

export default Navbar;