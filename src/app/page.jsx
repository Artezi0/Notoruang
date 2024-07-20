'use client';

import React from "react";
import Navbar from "./components/Navbar"
import Slider from "react-slick";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import './scss/main.scss'

export default function Home() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3  
  }

  return (
    <>
      <Navbar state={0} />
      <main className="main">
        <section className="main_title">
          <h1>Pesona Jawa di Setiap Sudut</h1>
          <p>Platform Desain Interior Pertama di Indonesia Bergaya Jawa Khas Kasongan</p>
          <div className="main_title-search">
            <IoSearch />
            <input type="text" placeholder="Search Item"/>
          </div>
        </section>
        <section className="main_projects">
          <h3>Your Project</h3>
          <Slider className="main_projects-project" {...settings}>
            <div className="project">
              <div className="project_img">
                <Image src={`/rooms/room1.jpg`} alt="thumb" fill/>
              </div>
              <p>Room 1</p>
            </div>
            <div className="project">
              <div className="project_img">
                <Image src={`/rooms/room2.jpg`} alt="thumb" fill/>
              </div>
              <p>Room 2</p>
            </div>
            <div className="project">
              <div className="project_img">
                <Image src={`/rooms/room3.jpg`} alt="thumb" fill/>
              </div>
              <p>Room 3</p>
            </div>
            <div className="project">
              <div className="project_img">
                <Image src={`/rooms/room4.jpg`} alt="thumb" fill/>
              </div>
              <p>Room 4</p>
            </div>
            <div className="project">
              <div className="project_img">
                <Image src={`/rooms/room5.jpg`} alt="thumb" fill/>
              </div>
              <p>Room 5</p>
            </div>
            <div className="project">
              <div className="project_img">
                <Image src={`/rooms/room6.jpg`} alt="thumb" fill/>
              </div>
              <p>Room 6</p>
            </div>
          </Slider>
          <div className="main_projects-add">
            <button type="button"><a href="../project">+</a></button>
          </div>
        </section>
      </main>
    </>
  );
}
