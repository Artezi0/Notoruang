"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import '../scss/navbar.scss'
import Image from 'next/image'
import { CgProfile } from "react-icons/cg";
import { Context } from '../context'

export default function Navbar({ state }) {
  const router = useRouter()
  const { handleUpdate } = Context()

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
            <button className='btn2' type='button' onClick={handleUpdate}>Save</button>
          </div>
        }
        {state == 2 &&
          <div className='navbar_acc'>
            <button type='button' onClick={() => router.back()}>Go Back</button>
          </div>
        }
    </nav>
  )
}

