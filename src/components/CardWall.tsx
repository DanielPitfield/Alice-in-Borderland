import styles from "../styles/Card.module.scss";

import Card from "./Card";
import { SpadesCardMappings } from "../data/Cards/Spades";
import { DiamondsCardMappings } from "../data/Cards/Diamonds";
import { ClubsCardMappings } from "../data/Cards/Clubs";
import { HeartsCardMappings } from "../data/Cards/Hearts";

const CardWall = () => {
  return (
    <>
      <div className={styles.cardWrapper}>
        {SpadesCardMappings.map((x) => x.card).map((card) => (
          <Card key={card} card={card} size={"medium"} hasLink />
        ))}
      </div>

      <div className={styles.cardWrapper}>
        {DiamondsCardMappings.map((x) => x.card).map((card) => (
          <Card key={card} card={card} size={"medium"} hasLink />
        ))}
      </div>

      <div className={styles.cardWrapper}>
        {ClubsCardMappings.map((x) => x.card).map((card) => (
          <Card key={card} card={card} size={"medium"} hasLink />
        ))}
      </div>

      <div className={styles.cardWrapper}>
        {HeartsCardMappings.map((x) => x.card).map((card) => (
          <Card key={card} card={card} size={"medium"} hasLink />
        ))}
      </div>
    </>
  );
};

export default CardWall;
