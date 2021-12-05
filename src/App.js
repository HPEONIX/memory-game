import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "./img/helmet-1.png", matched: false },
  { src: "./img/potion-1.png", matched: false },
  { src: "./img/ring-1.png", matched: false },
  { src: "./img/scroll-1.png", matched: false },
  { src: "./img/shield-1.png", matched: false },
  { src: "./img/sword-1.png", matched: false },
];

function App() {
  const [nextChoice, setNextChoice] = useState(2)
  const [choiceNo, setChoiceNo] = useState(2);
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choices, setChoices] = useState([]);
  const [disabled, setDisabled] = useState(false)

  //shuffle cards
  const shuffleCards = () => {
    if(nextChoice<2) 
    {
      console.log("NO")
      alert("value  shouldbe greater than 1");
      return
    }
    setChoiceNo(nextChoice)
    console.log(`no of choises needed ${choiceNo} of type ${typeof(choiceNo)}`)
    let shuffledCards = []
    for (let i = 0; i < nextChoice; i++) {
      shuffledCards = [...shuffledCards, ...cardImages]
    }
    shuffledCards = shuffledCards.sort(() => Math.random() - 0.5)
      .map((card, idx) => ({ ...card, id: idx }));
    setCards(shuffledCards);
    setChoices([]);
    setTurns(0);
  };

  //handle choice :- add selected card to choises if not already chosen
  const handleChoice = (card) => {
    console.log(`no of choises needed ${choiceNo} of type ${typeof(choiceNo)}`)
    if (choices.includes(card)) {
      console.log("card already selected")
      return
    }
    if (choices.length === choiceNo) {
      console.log("max selection reached")
      return
    }
    console.log("card added")
    const newChoices = [...choices, card];
    setChoices(newChoices);
  };

  //Compare selected cards
  useEffect(() => {
    console.log("card compared");
    if (choices.length === choiceNo) {                                                     //if max no of cards chosen per turn reached
      setDisabled(true);
      const choiceSource = choices.map((choice) => choice.src);
      if (choiceSource.every((selectedCardSrc) => selectedCardSrc === choiceSource[0])) {           //check if similar cards are chosen
        console.log("matching cards");
        setCards((prevCards) => {
          return prevCards.map((card) =>
            choiceSource.includes(card.src) ? { ...card, matched: true } : card                         //set matched flags of matched-selected card to true
          );
        });
      } else {
        console.log("cards dont match");
      }
      setTimeout(() => resetTurn(), 1000);                                                                                  //reset turn if max no of cards chosen per turn reached
    }
  }, [choices, choiceNo]);

  //reset turn :- clear choises and increment turn count
  const resetTurn = () => {
    console.log("choice reset");
    setTurns((prevTurns) => prevTurns + 1);
    setChoices([]);
    setDisabled(false);
  };

  //start game automatically
  useEffect(() => {
    shuffleCards();
  }, [])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <p>
        <input type="number" className="next-choices" name="next-choices" id="next-choices" onChange={(e) => { setNextChoice(Number(e.target.value)) }} />
      </p>
      <button onClick={() => shuffleCards()}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={choices.includes(card) || card.matched} disabled={disabled} />
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
