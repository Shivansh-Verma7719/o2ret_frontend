import { useState } from "react";
import "./card-stack.css";

function CardStack() {
  const [index, setIndex] = useState(1);

  const cardsData = [
    { title: "Card 1", description: "This is the first card description", i: 1 },
    { title: "Card 2", description: "This is the second card description", i: 2 },
    { title: "Card 3", description: "This is the third card description", i: 3 }
  ];

  function Card({ card }: { card: { title: string, description: string, i: number } }) {
    return (
      <li className="card" id={`card${card.i}`}>
                  <div className="card-body">
                      <h2>{card.title}</h2>
                      <p>{card.description}</p>
                  </div>
              </li>
    );
  }

  return (      
      <div className="container">
        <ul id="cards">
            
          {cardsData.map((card) => (
          <Card key={card.title} card={card} /> // Use unique key for each card
        ))}
        </ul>
    </div>
  );
}



export default CardStack;
