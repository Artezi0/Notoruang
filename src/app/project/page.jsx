"use client"

import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image';
import { PiPottedPlant } from "react-icons/pi";
import { LuSofa } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { LuCrown } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import '../scss/project.scss'
import Room from '../components/Room';

export default function Project() {
  const [basic, isBasic] = useState(false)
  const [decor, isDecor] = useState(false)
  const [shop, isShop] = useState(false)
  const [consult, isConsult] = useState(false)
  const [zoom, setZoom] = useState(50)
  const [room, isRoom] = useState(false)

  return (
    <>
      <Navbar state={1} />
      <section className='canvas'>
        <div className='canvas_content'>
          <div className='sidebar'>
            <div className='sidebar_tab'>
              <button className='btn1' type='button'onClick={() => isBasic(!basic) & isDecor(false) & isShop(false)} ><span><LuSofa /></span>Basic Element</button>
              <button className='btn1' type='button'onClick={() => isDecor(!decor) & isBasic(false) & isShop(false)} ><span><PiPottedPlant/></span>Home Decor</button>
              <button className='btn1' type='button'onClick={() => isShop(!shop) & isBasic(false) & isDecor(false)} ><span><LuShoppingCart/></span>Shop</button>
            </div>
            {basic &&
              <div className='sidebar_content'>
                <div className='sidebar_content-search'>
                  <span><IoSearch /></span>
                  <input type="text" placeholder='Search item'/>
                  <span><HiOutlineAdjustmentsHorizontal/></span>
                </div>
                <div className='sidebar_content-items'>
                  <div className='item'><Image src={`/basic/desk.png`} loading='lazy' fill objectFit='contain' alt='item'/></div>
                  <div className='item'><Image src={`/basic/sofa.png`} loading='lazy' fill objectFit='contain' alt='item'/></div>
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
                  <div className='item'><Image src={`/decor/clock.png`} loading='lazy' objectFit='contain' fill alt='item'/></div>
                  <div className='item'><Image src={`/decor/clock2.png`} loading='lazy' objectFit='contain' fill alt='item'/></div>
                  <div className='item'><Image src={`/decor/vase.png`} loading='lazy' objectFit='contain' fill alt='item'/></div>
                  <div className='item'><Image src={`/decor/vase2.png`} loading='lazy' objectFit='contain' fill alt='item'/></div>
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
                    <div className='shop_img'>
                      <Image src={`/shop/clock.png`} loading='lazy' fill objectFit='contain' alt='item'/>
                    </div>
                    <div className='shop_info'>
                      <h3>Jam Kayu Jati</h3>
                      <h2>Rp174.500</h2>
                      <a href="#">See more</a>
                    </div>
                  </div>
                  <div className='shop'>
                    <div className='shop_img'>
                      <Image src={`/shop/pot.png`} loading='lazy' fill objectFit='contain' alt='item'/>
                    </div>
                    <div className='shop_info'>
                      <h3>Vas Bunga Gerabah</h3>
                      <h2>Rp98.0000</h2>
                      <a href="#">See more</a>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className='view'>
            {room ? <Room zoom={zoom} /> : <button type='button' className='btn2' onClick={() => isRoom(true)}>Create Room +</button>}
          </div>
          <div className='control'>
            <div className='control_tab'>
              <button className='btn1' type='button'>Design</button>
              <button className='btn1' onClick={() => isConsult(!consult)} type='button'><span><LuCrown /></span> Consult</button>
            </div>
            {consult &&
            <div className="consult">
              <div className='consult_img'>
                <p>Upload reference photo</p>
                <div className='consult_img-up'>
                  <span><MdOutlineImage/></span>
                  <p>png/jpg 5MB max</p>
                  <input type="file" accept='jpg/png'/>
                </div>
                <p>What should it look like?</p>
                <input type="text" placeholder='Give a note'/>
              </div>
              <div className='consult_submit'>
                <p>Consult and check your design</p>
                <div className='consult_submit-btn'>
                  <button className='btn2' type="button"><a href="/project/consult"><span><MdOutlinePermContactCalendar /></span>Contact</a></button>
                  <button className='btn2' type="button">View Sketchup</button>
                </div>
              </div>
            </div>
            }
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
