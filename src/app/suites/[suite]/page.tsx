import styles from "../../../styles/Card.module.scss";

import Card from "../../../components/Card";
import { type CardName, CardSuites, CardRanks, CardSuiteMappings } from "../../../data/Cards/AllCards";

interface PageProps {
  params: Promise<{
    suite: string;
  }>;
}

export default async function Page(props: PageProps) {
  const suite = (await props.params).suite;

  const description: string | undefined = CardSuiteMappings.find(
    (x) => x.suite.toLowerCase() === suite.toLowerCase()
  )?.description;

  if (!suite) {
    return null;
  }

  // Dynamic segment is not one of the four card suites (or Joker)
  if (!CardSuites.some((suite) => suite === suite) && suite !== "Joker") {
    return null;
  }

  // Every CardName of the suite
  const allCards: CardName[] =
    suite === "Joker"
      ? ["Joker"]
      : CardRanks.map((rank) => {
          return `${rank} of ${suite}` as CardName;
        });

  return (
    <>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{suite}</h1>
        {description && <h3 className={styles.subtitle}>{description}</h3>}
      </div>

      <div className={styles.cardWrapper}>
        {allCards.map((card) => (
          <Card key={card} card={card} size={card === "Joker" ? "very large" : "large"} hasLink />
        ))}
      </div>
    </>
  );
}
