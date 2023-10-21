'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion"

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-6 my-1 rounded-full bg-white transition ease transform duration-300 z-30`;

  return <>
    <button
      className="flex flex-col h-14 w-14 rounded justify-center items-center group z-30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-[10px] opacity-100 group-hover:opacity-100"
            : "opacity-100 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-[10px] opacity-100 group-hover:opacity-100"
            : "opacity-100 group-hover:opacity-100"
        }`}
      />
    </button>
    {isOpen && (
      <motion.div 
      className="flex top-0 left-0 fixed flex-col items-center justify-center w-full h-screen text-white z-20">
        <Link className='z-20' href="/">Home</Link>
        <Link className='z-20' href="/about">About</Link>
        <Link className='z-20' href="/contact">Contact</Link>
      <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 0.300, ease: 'easeInOut' }}
      className='fixed border-r-[100%] bg-black z-0 left-0 top-0 h-screen w-screen'
      ></motion.div>
      </motion.div>
    )}
  </>;
}

export default Hamburger;