'use client';

import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar"
import Slider from "react-slick";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FiTrash } from "react-icons/fi";
import { Context } from "./context";
import './scss/main.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const router = useRouter()
  const [dragging, setDragging] = useState(false)  
  const { project, setActive, createProject, deleteProject } = Context()

  const handleBeforeChange = useCallback(() => {
    setDragging(true)
  }, [setDragging]) 
  const handleAfterChange = useCallback(() => {
    setDragging(false)
  }, [setDragging])
  const handleOnItemClick = useCallback((e) => {
    if (dragging) e.stopPropagation()
    },
    [dragging]
  ) 
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
    easing: 'ease',
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange
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
          <div className="main_projects-project project">
            <Slider {...settings} className="project_list">
              <button type="button" className="project_list-add btn2 item" onClick={() => createProject()}>+</button>
              {project.map(({ id, name, image }) => {
                return (
                  <div className="container item" key={id}>
                    <div className="container_del">
                      <button type="button" onClick={() => deleteProject(id)}><span><FiTrash /></span></button>
                    </div>
                    <div className="container_item" onClickCapture={handleOnItemClick} onClick={() => router.push(`/project/${id}`) & setActive(id)}>
                      <div className="container_item-img">
                        <Image src={`/rooms/room${image}.webp`} alt="thumb" width={300} height={180}/>
                      </div>
                      <p>{name}</p>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </section>
      </main>
    </>
  );
}
