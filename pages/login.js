import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Navbarlayout from '@/components/Navbarlayout'
import CardLogin from '@/components/CardLogin'



export default function Login() {
  return (
    <main>
        <section>|
        <div className="container">
            <Navbarlayout></Navbarlayout>
          </div>
        </section>

        <section>
            
            <div className="container">
            <CardLogin />
            </div>
        </section>

    </main>
)
}

  
