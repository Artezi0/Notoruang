import Image from 'next/image'
import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react'
import Moveable from 'react-moveable'
import { GroupManager } from "@moveable/helper"
import Selecto from 'react-selecto'
import { deepFlat } from "@daybrush/utils"
import '../scss/room.scss'

export default function Room() {
  const moveableRef = useRef(null)
  const selectoRef = useRef(null)
  const [targets, setTargets] = useState([])
  const groupManager = useMemo(() => new GroupManager([]), [])
  const setSelectedTargets = useCallback((nextTargetes) => {
    selectoRef.current.setSelectedTargets(deepFlat(nextTargetes))
    setTargets(nextTargetes)
  }, [])

  useEffect(() => {
    const elements = selectoRef.current.getSelectableElements()
    groupManager.set([], elements)
  }, [])

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
        onRenderGroup={e => {
          e.events.forEach(ev => {
              ev.target.style.cssText += ev.cssText;
          });
        }}
      />
      <Selecto
        ref={selectoRef}
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
          const flatted = deepFlat(targets)
          if (
            moveable.isMoveableElement(target)
            || flatted.some(t => t === target || t.contains(target))
          ) {
            e.stop()
          }
        }}
        onSelectEnd={e => {
          const {
            isDragStart,
            added,
            removed,
            inputEvent,
          } = e
          const moveable = moveableRef.current;
        
          if (isDragStart) {
              inputEvent.preventDefault();
          
              moveable.waitToChangeTarget().then(() => {
                  moveable.dragStart(inputEvent);
              });
          }
          let nextChilds
        
          if (isDragStart) {
              nextChilds = groupManager.selectCompletedChilds(targets, added, removed);
          } else {
              nextChilds = groupManager.selectSameDepthChilds(targets, added, removed);
          }
        
          e.currentTarget.setSelectedTargets(nextChilds.flatten());
          setSelectedTargets(nextChilds.targets());
        }}
      />
    </section>
  )
}