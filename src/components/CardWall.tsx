import styles from "../styles/Card.module.scss";

import Card from "./Card";
import { SpadesCardMappings } from "../data/Cards/Spades";
import { DiamondsCardMappings } from "../data/Cards/Diamonds";
import { ClubsCardMappings } from "../data/Cards/Clubs";
import { HeartsCardMappings } from "../data/Cards/Hearts";

const CardWall = () => {
  const allCards = SpadesCardMappings.concat(DiamondsCardMappings, ClubsCardMappings, HeartsCardMappings).map(
    (x) => x.card
  );

  return (
    <div className={styles.cardWrapper}>
      {allCards.map((card) => (
        <Card key={card} card={card} size={"medium"} hasLink />
      ))}
    </div>
  );
};

export default CardWall;
