import React, {useState} from 'react';
import shuffle from './Utilities/shuffle.js'
import Card from "./Components/Card.jsx";

function App() {
  const [cards, setCards] = useState(shuffle)
  return (
    <>
    <div className="grid">
    {cards.map((card) => {
      const {image, id, matched} = card;
      return (
        <Card
        key={id}
        image={image}
        selected={false}
        onClick={()=> {}}
        />
      )
    })}
    </div>
    </>
  );
}

export default App;
