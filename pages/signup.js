import React from 'react'
import Navbarlayout from '@/components/Navbarlayout'
import CardSignup from '@/components/CardSignup'


const signup = () => {
  return (
    
    <main>
        <section>|
        <div className="container">
            <Navbarlayout></Navbarlayout>
          </div>
        </section>

        <section>
            <div className="container">
                <CardSignup></CardSignup>

            </div>
        </section>

    </main>

  )
}

export default signup