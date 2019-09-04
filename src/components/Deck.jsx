import React, { useState, useEffect } from 'react'
import Card from './Card'

const Deck = () => {
  const [deck, setDeck] = useState([])
  const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
  const values = [
    ['2', 2],
    ['3', 3],
    ['4', 4],
    ['5', 5],
    ['6', 6],
    ['7', 7],
    ['8', 8],
    ['9', 9],
    ['10', 10],
    ['Jack', 11],
    ['Queen', 12],
    ['King', 13],
    ['Ace', 14]
  ]

  let holdVariable = ''

  const newShuffledDeck = () => {
    let tempDeck = []

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const newCard = [`${values[j][0]} of ${suits[i]}`, values[j][1]]
        tempDeck.push(newCard)
      }
    }

    const arrayLength = tempDeck.length

    for (let endSelector = arrayLength - 1; endSelector > 0; endSelector--) {
      const randomNumber = Math.floor(Math.random() * arrayLength)
      holdVariable = tempDeck[endSelector]
      tempDeck[endSelector] = tempDeck[randomNumber]
      tempDeck[randomNumber] = holdVariable
    }
    setDeck(tempDeck)
  }

  useEffect(() => {
    newShuffledDeck()
  }, [])

  return (
    <>
      {deck.map((card, i) => {
        return <Card key={i} />
      })}
    </>
  )
}

export default Deck
