import React, { useState, useEffect } from 'react'

const Card = props => {
  const [color, setColor] = useState('rgb(0, 0, 0)')
  const [index, setIndex] = useState(props.data.position)
  const [length, setLength] = useState(props.data.deckLength)
  const [offset, setOffset] = useState(props.data.offset)

  // const calcColor = (i, length) => {
  //   let increment = 255 / length
  //   setColor(255 - increment * i)
  // }

  const calcColor = () => {
    if (index < offset) {
      let increment = 255 / offset
      setColor(`rgb(0,${increment * index},0)`)
    } else if (index >= offset) {
      let increment = 255 / (length - offset)
      setColor(`rgb(${255 - increment * (index - offset)},0,0)`)
    } else {
      console.log('something went wrong')
    }
  }

  useEffect(() => {
    // calcColor(index, length)
    calcColor()
    // console.log(props)
  }, [])

  return (
    <>
      <div
        className="card"
        style={{
          backgroundColor: color
        }}
      ></div>
    </>
  )
}

export default Card
