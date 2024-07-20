"use client"

import React, { useState } from 'react'
import '../scss/navbar.scss'
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";

export default function Navbar({ state }) {
  const [user, isUser] = useState(false)

  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <Image src={`/logo.png`} alt="Logo" width={150} height={50} priority/>
      </div>
        {state == 0 && 
          <div className='navbar_acc'>
            <a href="/">Joe <span><CgProfile /></span></a>
          </div>
        }
        {state == 1 &&
          <div className="navbar_btn">
            <button className='btn2' type='button'>Save</button>
          </div>
        }
        {state == 2 &&
          <div className='navbar_acc'>
            <a href="/project">Go Back</a>
          </div>
        }
    </nav>
  )
}

