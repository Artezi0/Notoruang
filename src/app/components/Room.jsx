import Image from 'next/image'
import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react'
import Moveable from 'react-moveable'
import { GroupManager } from "@moveable/helper"
import Selecto from 'react-selecto'
import { deepFlat } from "@daybrush/utils"
import '../scss/room.scss'

export default function Room() {
  const moveableRef = useRef(null)
  const [targets, setTargets] = useState([])

  return (
    <section className='container'>
      <div className='target'><Image src={`/2d/chair.png`} fill objectFit='cover' alt='item'/></div>
      <div className='target'><Image src={`/2d/chair.png`} fill objectFit='cover' alt='item'/></div>
      <div className='target'><Image src={`/2d/chair.png`} fill objectFit='cover' alt='item'/></div>
      <div className='target'><Image src={`/2d/chair.png`} fill objectFit='cover' alt='item'/></div>
      <div className='target'><Image src={`/2d/table.png`} fill objectFit='cover' alt='item'/></div>
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
    </section>
  )
}