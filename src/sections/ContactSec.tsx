
import { DotPatternDemo2 } from '@/components/dotpatterncontact'
import React from 'react'

const ContactSec = () => {
  return (
    <section className="md:pt-2 pt-4 lg:pt-10 h-screen md:pb-12 lg:pb-24 bg-black text-white flex flex-col items-center justify-center text-center gap-[6rem] md:max-w-3xl sm:max-w-[240px] mx-auto">
      <DotPatternDemo2/>
        <div className='z-20'>
            <div className="section-heading-2">
              <h2 className="section-title text-white pb-5">Contact Us</h2>
              <p className="section-description text-white text-opacity-60">
              Get in touch with us at:
              </p>
              <p className="section-description mt-5 text-white text-opacity-30 pb-4 hover:text-opacity-100 transition">
              technical@innovare.dev
              </p>
              <p className="section-description text-white text-opacity-30 hover:text-opacity-100 transition">
              aman.shaikh@innovare.dev
              </p>              
            </div>
        </div>
        <div className='z-20'>
          <div className="section-heading-2">
            <h2 className="section-title text-white pb-5">Address</h2>
            <p className="section-description mt-5 text-white text-opacity-30 pb-10 hover:text-opacity-100 transition">
              	Gut No. 44, 46, 48, 49 and 50, Sate, Maval (PMRDA) Dist. Pune-412106 ‌
                Maharashtra, India ‌
            </p>
          </div>
        </div>
    </section>
  )
}

export default ContactSec
