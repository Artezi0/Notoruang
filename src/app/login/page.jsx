import React from 'react'
import Image from 'next/image'
import '../scss/user.scss'

export default function page() {
  return (
    <section className='container'>
      <div className='login'>
        <div className='login_header'>
          <Image src={`/logo.png`} priority width={200} height={80} alt='logo'/>
          <h2>Login to your account</h2>
        </div>
        <div className='login_input'>
          <input type="email" placeholder='Email'/>
          <input type="text" placeholder='Name'/>
        </div>
        <div className='login_btn'>
          <button type='button' className='btn2'><a href="/">Login</a></button>
          <a href="/signup">Didn't have an account?</a>
        </div>
      </div>
    </section>
  )
}