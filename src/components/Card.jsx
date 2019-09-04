import React, { useState, useEffect } from 'react'

const Card = props => {
  const [color, setColor] = useState(0)
  const [index, setIndex] = useState(props.data.position)
  const [length, setLength] = useState(props.data.deckLength)

  const calcColor = (i, length) => {
    let increment = 255 / length
    setColor(255 - increment * i)
  }

  const calcWidth = () => {
    let width = window.screen.width
    console.log(width)
  }

  useEffect(() => {
    calcColor(index, length)
    calcWidth()
  }, [])

  return (
    <>
      <div
        className="test-color"
        style={{
          backgroundColor: `rgb(${color},${color},${color})`
        }}
      ></div>
    </>
  )
}

export default Card
