'use client';

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Slider from "react-slick";
import { IoSearch } from "react-icons/io5";
import { doc, collection, onSnapshot, addDoc, deleteDoc } from 'firebase/firestore'
import { db } from "./firebase";
import Image from "next/image";
import './scss/main.scss'
import { useRouter } from "next/navigation";

export default function home() {
  const [ project, setProject ] = useState([])
  const router = useRouter()

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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false
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
            <button type="button" className="project_add btn2">+</button>
            <Slider className="project_list" {...settings}>
              {project.map(({ uid, title, image }) => {
                return (
                  <div className="item" key={uid} onClick={() => router.push('/project')}>
                    <div className="item_img">
                      <Image src={`/rooms/${image}`} alt="thumb" fill/>
                    </div>
                    <p>{title}</p>
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
