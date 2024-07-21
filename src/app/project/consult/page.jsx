"use client"

import Navbar from '@/app/components/Navbar'
import React from 'react'
import Image from 'next/image'
import '../../scss/consult.scss'
import { FaArrowLeft } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import { FiPaperclip } from "react-icons/fi";
import { MdMicNone } from "react-icons/md";
import { useRouter } from 'next/navigation';

export default function consult() {
  const router = useRouter()

  return (
    <>
      <Navbar state={3} />
      <section className='consult'>
        <section className='consult_profile'>
          <button type='button' onClick={() => router.back()}><FaArrowLeft /></button>
          <div className='consult_profile-info'>
            <div className='avatar'>
              <div className='avatar_img'>
                <Image src={`/avatar3.jpg`} alt='avatar' fill priority />
              </div>
              <span className='status'></span>
            </div>
            <p className='name'>Ray Suwarna</p>
            <p className='bio'>Designer</p>
          </div>
          <div className='consult_profile-feeds'>
            <p className='name'>Feed</p>
            <div className='feed'>
              <div className='content'><Image src={`/feed.png`} fill alt='feed'/></div>
              <div className='content'><Image src={`/feed.png`} fill alt='feed'/></div>
              <div className='content break'><Image src={`/feed.png`} fill alt='feed'/></div>
              <div className='content'><Image src={`/feed.png`} fill alt='feed'/></div>
              <div className='content'><Image src={`/feed.png`} fill alt='feed'/></div>
              <div className='content'><Image src={`/feed.png`} fill alt='feed'/></div>
            </div>
          </div>
        </section>
        <section className='consult_chat'>
          <div className='consult_chat-top'>
            <div className='info'>
              <div className='info_img'>
                <Image src={`/avatar3.jpg`} alt='avatar' fill priority />
              </div>
              <div className='info_name'>
                <p className='name'>Ray Suwarna</p>
                <p className='status'>● Online</p>
              </div>
            </div>
            <div className="cta">
              <button type='button' className='btn2'><BsTelephone /></button>
              <button type='button' className='btn2'><FiVideo /></button>
            </div>
          </div>
          <div className='consult_chat-view'>
            <div className='sender'>
              <div className='avatar'>
                <Image src={`/avatar.png`} layout='fill' alt='avatar'/>
              </div>
              <div className='sender_text'><p>Halo kak, kami butuh bantuan desain untuk ruang tamu dongg</p></div>
            </div>
            <div className='receiver'>
              <div className='avatar'>
                <Image src={`/avatar3.jpg`} layout='fill' alt='avatar'/>
              </div>
              <div className='receiver_text'><p>Baik, ada yang bisa kami bantu?</p></div>
            </div>
            <div className='sender'>
              <div className='avatar'>
                <Image src={`/avatar.png`} layout='fill' alt='avatar'/>
              </div>
              <div className='sender_text'><p>Untuk ruang tamu berukuran 20 meter persegi dengan nuansa ruangan klasik, baiknya memakai vas yang seperti apa ya</p></div>
            </div>
            <div className='receiver'>
              <div className='avatar'>
                <Image src={`/avatar3.jpg`} layout='fill' alt='avatar'/>
              </div>
              <div className='receiver_text'><p>Terima kasih atas pertanyaannya, karena diameternya tidak teralu besar dan bernuansa klasik, kami rekomendasikan untuk menggunakan Vas yang terbuat dari tanah liat asli bewarna tua</p></div>
            </div>
          </div>
          <div className="consult_chat-input">
            <button className='btn1' type='button'><FiPaperclip/></button>
            <input type="text" placeholder='Type something'/>
            <button className='btn1' type='button'><MdMicNone/></button>
          </div>
        </section>
      </section>
    </>

  )
}