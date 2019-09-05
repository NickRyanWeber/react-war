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
  const [offset, setOffset] = useState(0)
  const [tieOffset, setTieOffset] = useState(0)

  let holdVariable = ''

  const newShuffledDeck = () => {
    let tempDeck = []

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const newCard = [`${values[j][0]} of ${suits[i]}`, values[j][1]]
        tempDeck.push(newCard)
      }
    }
    setOffset(tempDeck.length / 2)
    const arrayLength = tempDeck.length

    for (let endSelector = arrayLength - 1; endSelector > 0; endSelector--) {
      const randomNumber = Math.floor(Math.random() * arrayLength)
      holdVariable = tempDeck[endSelector]
      tempDeck[endSelector] = tempDeck[randomNumber]
      tempDeck[randomNumber] = holdVariable
    }
    setDeck(tempDeck)
    console.table(tempDeck)
  }

  const deal = () => {
    const playerCard = deck[offset - tieOffset]
    const computerCard = deck[offset + 1 + tieOffset]
    let holdArray = []
    if (playerCard[1] > computerCard[1]) {
      console.log('player wins')
      holdArray = deck.splice(
        offset - tieOffset,
        (tieOffset === 0 ? tieOffset : tieOffset + 1) + 2
      )
      holdArray.forEach(card => {
        let _deck = deck
        _deck.unshift(card)
        setDeck(_deck)
      })
      setOffset(offset + 1)
      setTieOffset(0)
    } else if (playerCard[1] < computerCard[1]) {
      console.log('computer wins')
      holdArray = deck.splice(offset - tieOffset, tieOffset + 2)
      holdArray.forEach(card => {
        let _deck = deck
        _deck.push(card)
        setDeck(_deck)
      })
      setTieOffset(0)
      setOffset(offset - 1)
    } else {
      setTieOffset(tieOffset + 1)
      console.log('tie')
    }
    // TODO: move all setXXXX to after ifs
    console.table(deck)
    console.log(playerCard)
    console.log(computerCard)
  }

  useEffect(() => {
    newShuffledDeck()
  }, [])

  return (
    <>
      <div className="display-area">
        <h1>WAR</h1>
        <p>React App using a Single Array</p>
        <div className="card-area">
          {deck.map((card, i) => {
            return (
              <Card
                key={i}
                data={{
                  position: i,
                  value: card[1],
                  deckLength: deck.length,
                  offset: offset
                }}
              />
            )
          })}
        </div>
        <button onClick={deal}>Deal</button>
      </div>
    </>
  )
}

export default Deck
