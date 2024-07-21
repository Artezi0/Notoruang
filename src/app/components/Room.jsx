import Image from 'next/image'
import React, { useRef, useState } from 'react'
import Moveable from 'react-moveable'
import Selecto from 'react-selecto'
import data from './data.json'
import '../scss/room.scss'

export default function Room() {
  const moveableRef = useRef(null)
  const [targets, setTargets] = useState([])
  const [active, setActive] = useState(false)
  
  return (
  <section className='room'>
    <div className='container'>
      {data.map(({uid, asset, width, height}) => {
        return (
          <div className='target' key={uid}>
            <Image src={`${asset}`} loading='lazy' alt='item' width={width} height={height}/>
          </div>
        )
      })}
      <Moveable
        ref={moveableRef}
        target={targets}
        individualGroupable={true}
        draggable={true}
        throttleDrag={1}
        edgeDraggable={false}
        scalable={true}
        keepRatio={true}
        rotatable={true}
        rotationPosition={"top"}
        snappable={true}
        edge={true}
        bounds={{"left":0,"top":0,"right":0,"bottom":0,"position":"css"}}
        onDrag={e => {
          e.target.style.transform = e.transform;
        }}
        onScale={e => {
          e.target.style.transform = e.drag.transform;
        }}
        onRotate={e => {
          e.target.style.transform = e.drag.transform;
        }}
        />
      <Selecto
        dragContainer={".container"}
        selectableTargets={[".target"]}
        hitRate={0}
        selectByClick={true}
        selectFromInside={false}
        toggleContinueSelect={["shift"]}
        ratio={0}
        onDragStart={(e) => {
          const moveable = moveableRef.current
          const target = e.inputEvent.target
          if (
            moveable.isMoveableElement(target)
            || targets.some(t => t === target || t.contains(target))
          ) {
            e.stop()
          }
        }}
        onSelectEnd={e => {
          const moveable = moveableRef.current
          if (e.isDragStart) {
            e.inputEvent.preventDef 
            moveable.waitToChangeTarget().then(() => {
              moveable.dragStart(e.inputEvent);
            });
          }
          setTargets(e.selected);
        }}
        />
    </div>
  </section>
  )
}