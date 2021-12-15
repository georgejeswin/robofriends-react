import Card from "./Card";
import "./CardContainer.css";

const CardContainer = ({ robs }) => {
  return (
    <div className="cardContainer">
      {robs.map((rob) => {
        return (
          <Card
            image={`https://robohash.org/${rob.name}`}
            name={rob.name}
            key={rob.id}
            email={rob.email}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;
