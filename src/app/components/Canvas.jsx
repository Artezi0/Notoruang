import { useRef, useEffect } from "react"

const Canvas = props => {
  const ref = useRef()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'grey'
    ctx.fillRect(10,10,100,100)
  }, [])
  
  return (
    <canvas ref={ref} {...props} />
  )
}

export default Canvas