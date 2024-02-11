import React, { useState, useEffect } from 'react'
import logo from '../public/images/logo.svg'
import Image from 'next/image'



export default function Navbarlayout() {
  return (
    <div className="fixed w-full h-[150px] bg-primary z-10">
      <header className="h-full ml-[80px] px-20 flex items-center justify-between">
        <div style={{ height: 81 }} className="flex">
          <Image src={logo} alt="logo"></Image>
        </div>
      </header>

    

    </div>
  )
}
