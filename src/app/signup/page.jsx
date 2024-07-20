import React from 'react'
import Image from 'next/image'
import '../scss/user.scss'

export default function page() {
  return (
    <section className='container'>
      <div className='signin'>
        <div className='signin_header'>
          <Image src={`/logo.png`} priority width={200} height={80} alt='logo'/>
          <h2>Make new account</h2>
        </div>
        <div className='signin_input'>
          <input type="email" placeholder='Email'/>
          <input type="text" placeholder='Name'/>
          <select className='signin_input-type'>
            <option value="customer">User</option>
            <option value="user">Craftman</option>
          </select>
        </div>
        <div className='signin_btn'>
          <button type='button' className='btn2'><a href="/">Sign Up</a></button>
          <a href="/login">Already have an account?</a>
        </div>
      </div>
    </section>
  )
}