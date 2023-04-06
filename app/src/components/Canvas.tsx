import React, { useRef, useEffect } from 'react'

const Canvas = (props) => {
  const { draw, ...rest } = props
  const canvasRef = useRef(null)

  const resizeCanvas = (canvas) => {
    const { width, height } = canvas.getBoundingClientRect()
    
    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio:ratio=1 } = window
      const context = canvas.getContext('2d')
      canvas.width = width*ratio
      canvas.height = height*ratio
      context.scale(ratio, ratio)
      return true
    }

    return false
  }
  
  const predraw = (context, canvas) => {
    context.save()
    resizeCanvas(canvas)
    const { width, height } = context.canvas
    context.clearRect(0, 0, width, height)
  }

  const postdraw = (context, canvas) => {
    
  }

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    
    predraw(context, canvas)
    render()
    postdraw(context, canvas)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas