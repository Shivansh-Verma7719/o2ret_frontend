

const cardsData = [
  { title: "Card 1", description: "This is the first card description" },
  { title: "Card 2", description: "This is the second card description" },
  { title: "Card 3", description: "This is the third card description" }
];

function Card({ card }: { card: { title: string, description: string } }) {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
  <div className="flex flex-col space-y-4">
    <div className="bg-white px-4 py-5">
      <h2>card.title</h2>
      <p>card.description</p>
    </div>
    </div>
</div>
  );
}

function CardStack() {
  return (
    <div className="flex flex-col gap-4">
      {cardsData.map((card) => (
        <Card key={card.title} card={card} /> // Use unique key for each card
      ))}
    </div>
  );
}
