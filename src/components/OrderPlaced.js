import React from 'react'
import Confetti from 'react-confetti'
import { CartState } from '../context/Context'

const OrderPlaced = () => {
  return (
    <>
    <div >
    <Confetti 
    height={999}
    width={1500}
    recycle={false}
    numberOfPieces={1000}
      drawShape={ctx => {
        ctx.beginPath()
        for(let i = 0; i < 22; i++) {
          const angle = 0.35 * i
          const x = (0.2 + (1.5 * angle))
          const y = (0.2 + (1.5 * angle))
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.closePath()
      }}
    />
     </div>
    </>

  )
}

export default OrderPlaced
