import { useState } from 'react';
import './App.css';
import Card from './Components/Card';

function App() {

  const [selectedCards, setSelectedCards] = useState([]);
  const [currScore, setCurrScore] = useState(0);
  const [cards, setCards] = useState([
    {
      text: "Lamborgini",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Lamborghini_Logo.svg/1200px-Lamborghini_Logo.svg.png"
    },
    {
      text: "Mercedes Benz",
      img: "https://i.pinimg.com/originals/3b/df/27/3bdf2786f9bba30a6ff1376c81b76c89.png"
    },
    {
      text: "Ferrari",
      img: "https://i.pinimg.com/originals/e7/53/e4/e753e416c78a5c47dfbc79f421a5e70d.png"
    },
    {
      text: "Porsche",
      img: "https://www.carlogos.org/car-logos/porsche-logo-950x1100.png"
    }
  ]);

  const shuffleCards = () => {
    let array = [...cards]
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    setCards(array);
  }

  const clickCard = (text) => {
    
    if(selectedCards.includes(text)){
      setSelectedCards([]);
      setCurrScore(() => 0);
    }
    else{
      setSelectedCards([...selectedCards, text]);
      setCurrScore(() => currScore + 1);
    }
    
    shuffleCards();
  }
  console.log(selectedCards.length)
  
  return (
    <div className="App">
      <header>
        <h1>Memory Card</h1>
        <div className="scoreboard-div">
          <p>Best Score: <span className="best-score">0</span></p>
          <p>Current Score: <span className="curr-score"></span>{currScore}</p>
        </div>
      </header>
      <main>
        {cards.map((cardData) => <Card data={cardData} onClick={clickCard} />)}
      </main>
    </div>
  );
}

export default App;
