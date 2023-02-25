import { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from "./Components/Header.jsx";
import useAppBadge from "./Hooks/useAppBadge.jsx";
import shuffle from './utilities/shuffle';



function App() {
  const [cards, setCards] = useState(shuffle); // Cards array from assets
  const [pickOne, setPickOne] = useState(null)
  const [pickTwo, setPickTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [wins, setWins] = useState(0)
  const [setBadge, clearBadge] = useAppBadge()


  const handleClick = (card) => {
    if(!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card)
    }
  }
  const handleTurn = () => {
    setPickOne(null)
    setPickTwo(null)
    setDisabled(false)
  }
  useEffect(() => {
    let pickTimer;
    if(pickOne && pickTwo){
      if(pickOne.image === pickTwo.image){
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if(card.image === pickOne.image){
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        handleTurn();
      } else {
        setDisabled(true)
        pickTimer = setTimeout(() => {
          handleTurn();
        }, 1000)
      }
    }
    return () => {
      clearTimeout(pickTimer)
    }
  }, [cards, pickOne, pickTwo])
  useEffect(() => {
    const checkWin = cards.filter((card) => !card.matched)
    if(cards.length && checkWin.length < 1){
      console.log('You win!!!')
      setWins(wins + 1);
      handleTurn()
      setBadge()
      setCards(shuffle)
    }
  }, [cards, wins])

  const handleNewGame = () => {
    clearBadge()
    setWins(0)
    handleTurn()
    setCards(shuffle)
  }
  return (
    <>
  <Header handleNewGame={handleNewGame} wins={wins}/>
      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;
          
          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
