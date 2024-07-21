"use client"

import React, { useState } from 'react'
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import Room from '@/app/components/Room';
import { PiPottedPlant } from "react-icons/pi";
import { LuSofa } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { LuCrown } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import data from './data.json'
import roomData from '@/app/components/data.json'
import '@/app/scss/project.scss'

export default function Project() {
  const [basic, isBasic] = useState(false)
  const [decor, isDecor] = useState(false)
  const [shop, isShop] = useState(false)
  const [consult, isConsult] = useState(false)
  const [zoom, setZoom] = useState(50)
  const [room, isRoom] = useState(false)
  
  function handleCreate(uid, asset, width, height) {
    let obj = {
      "uid" : uid,
      "asset": asset,
      "width": width,
      "height": height
    }
    roomData.push(obj)
  }

  return (
    <>
      <Navbar state={1} />
      <section className='canvas'>
        <div className='canvas_content'>
          <div className='sidebar'>
            <div className='sidebar_tab'>
              <button className='btn1' type='button' onClick={() => isBasic(!basic) & isDecor(false) & isShop(false) & isConsult(false)}><span><LuSofa /></span>Basic Element</button>
              <button className='btn1' type='button' onClick={() => isDecor(!decor) & isBasic(false) & isShop(false) & isConsult(false)}><span><PiPottedPlant/></span>Home Decor</button>
              <button className='btn1' type='button' onClick={() => isShop(!shop) & isBasic(false) & isDecor(false) & isConsult(false)}><span><LuShoppingCart/></span>Shop</button>
              <button className='btn1' type='button' onClick={() => isConsult(!consult) & isBasic(false) & isDecor(false) & isShop(false)}><span><LuCrown /></span>Consult</button>
            </div>
            {basic &&
              <div className='sidebar_content'>
                <div className='sidebar_content-search'>
                  <span><IoSearch /></span>
                  <input type="text" placeholder='Search item'/>
                  <span><HiOutlineAdjustmentsHorizontal/></span>
                </div>
                <div className='sidebar_content-items'>
                  {data.basic.map(({uid, image, green, width, height, asset}) => {
                    return (
                      <div className='item' key={uid} onClick={() => handleCreate(uid, asset, width, height)}>
                        <Image src={`${image}`} loading='lazy' objectFit='contain' fill alt='item'/>
                        {green && <Image className='tag' src={`/green.png`} loading='lazy' width={30} height={30} alt='tag' />}
                      </div>
                    )
                  })}
                </div>
              </div>
            }
            {decor &&
              <div className='sidebar_content'>
                <div className='sidebar_content-search'>
                  <span><IoSearch /></span>
                  <input type="text" placeholder='Search item'/>
                  <span><HiOutlineAdjustmentsHorizontal/></span>
                </div>
                <div className='sidebar_content-items'>
                  {data.decor.map(({uid, image, green, width, height, asset}) => {
                    return (
                      <div className='item' key={uid} onClick={() => handleCreate(uid, asset, width, height)}>
                        <Image src={`${image}`} loading='lazy' objectFit='contain' fill alt='item'/>
                        {green && <Image className='tag' src={`/green.png`} loading='lazy' width={30} height={30} alt='tag' />}
                      </div>
                    )
                  })}
                </div>
              </div>
            }
            {shop &&
              <div className='sidebar_content'>
                <div className='sidebar_content-search'>
                  <span><IoSearch /></span>
                  <input type="text" placeholder='Search item'/>
                  <span><HiOutlineAdjustmentsHorizontal/></span>
                </div>
                <div className='sidebar_content-shop'>
                  <div className='shop'>
                    <Image className='tag' src={`/green.png`} loading='lazy' width={30} height={30} alt='tag' />
                    <div className='shop_img'>
                      <Image src={`/shop/clock.png`} loading='lazy' fill objectFit='contain' alt='item'/>
                    </div>
                    <div className='shop_info'>
                      <h3>Jam Kayu Jati</h3>
                      <h2>Rp174.500</h2>
                      <a href="/shop">See more</a>
                    </div>
                  </div>
                  <div className='shop'>
                    <div className='shop_img'>
                      <Image src={`/shop/pot.png`} loading='lazy' fill objectFit='contain' alt='item'/>
                    </div>
                    <div className='shop_info'>
                      <h3>Vas Bunga Gerabah</h3>
                      <h2>Rp98.0000</h2>
                      <a href="/shop">See more</a>
                    </div>
                  </div>
                </div>
              </div>
            }
            {consult &&
              <div className="sidebar_content">
                <div className="sidebar_content-consult">
                  <div className='image'>
                    <p>Upload reference photo</p>
                    <div className='image_up'>
                      <Image src={`/rooms/room7.jpg`} loading='lazy' objectFit='cover' fill alt='upload' />
                    </div>
                    <p>Room Dimension</p>
                    <div className='image_input'>
                      <input type="number" placeholder='P'/><p>x</p>
                      <input type="number" placeholder='L'/><p>x</p>
                      <input type="number" placeholder='T'/>
                    </div>
                  </div>
                  <div className='submit'>
                    <p>Consult and check your design</p>
                    <div className='submit_btn'>
                      <button className='btn2' type="button"><a href="/project/consult"><span><MdOutlinePermContactCalendar /></span>Contact</a></button>
                      <button className='btn2' type="button"><a target='_blank' href="https://app.sketchup.com/share/tc/northAmerica/O1AEOqZXx5A?stoken=ihDZru6xAA4zhI-xNyonYu242O-yjnM0LEO6NXZS5Y5rF-SUlQpuylBcADsnSJra&source=web">View Sketchup</a></button>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className='view'>
            <Room zoom={zoom} />
          </div>
        </div>
        <div className="canvas_set">
          <p>{zoom}%</p>
          <div className='canvas_set-zoom'>
            <input id='zoom' min={10} max={100} step={10} type="range" onChange={(e) => setZoom(e.target.value)}/>
          </div>
        </div>
      </section>
    </>
  )
}
