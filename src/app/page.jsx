'use client';

import React, { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar"
import Slider from "react-slick";
import { IoSearch } from "react-icons/io5";
import { doc, collection, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from "./firebase";
import Image from "next/image";
import './scss/main.scss'
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";

export default function Home() {
  const [ project, setProject ] = useState([])
  const [dragging, setDragging] = useState(false)
  const router = useRouter()

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

  async function createProject() {
    let data = {
      'name' : 'Untitled',
      'image' : Math.floor(Math.random() * (8 - 1)) + 1,
      'data' : { }
    }
    await setDoc(doc(db, "project", uuid()), data)
  } 

  useEffect(() => {
    onSnapshot(collection(db, 'project'), (snapShot) => {
      let list = []      
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() })
      })  
      setProject(list)
    }, 
    (error) => {
      console.warn(error)
  })}, [])

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
            <Slider 
              className="project_list" 
              {...settings}
            >
              <button type="button" className="project_list-add btn2" onClick={() => createProject()}>+</button>
              {project.map(({ id, name, image }) => {
                return (
                  <div className="item" key={id} onClickCapture={handleOnItemClick} onClick={() => router.push(`/project/${id}`)}>
                    <div className="item_img">
                      <Image src={`/rooms/room${image}.jpg`} alt="thumb" fill objectFit="cover"/>
                    </div>
                    <p>{name}</p>
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
