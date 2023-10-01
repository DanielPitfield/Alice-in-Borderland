import styles from "../../styles/Card.module.scss";

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Card from "../../components/Card";
import { type CardName, CardSuites, CardRanks, CardSuiteMappings, type CardSuite } from "../../data/Cards/AllCards";

export const getStaticPaths: GetStaticPaths = () => {
  // Paths need to be strings (and also add the Joker!)
  const allCardSuites: string[] = CardSuites.map((suite) => suite as string).concat("Joker");

  return {
    paths: allCardSuites.map((suite) => ({
      params: {
        suite,
      },
    })),
    fallback: false,
  };
};

export function getStaticProps(context: GetStaticPropsContext<{ suite: CardSuite | "Joker" }>) {
  const suiteParam = context.params?.suite as string;

  const suite = suiteParam as CardSuite | "Joker";
  const description: string | undefined = CardSuiteMappings.find(
    (x) => x.suite.toLowerCase() === suite.toLowerCase()
  )?.description;

  return {
    props: {
      suite,
      description,
    },
  };
}

export default function SuitePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!props.suite) {
    return null;
  }

  // Dynamic segment is not one of the four card suites (or Joker)
  if (!CardSuites.some((suite) => suite === props.suite) && props.suite !== "Joker") {
    return null;
  }

  // Every CardName of the suite
  const allCards: CardName[] =
    props.suite === "Joker"
      ? ["Joker"]
      : CardRanks.map((rank) => {
          return `${rank} of ${props.suite}` as CardName;
        });

  return (
    <>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{props.suite}</h1>
        {props.description && <h3 className={styles.subtitle}>{props.description}</h3>}
      </div>

      <div className={styles.cardWrapper}>
        {allCards.map((card) => (
          <Card key={card} card={card} size={card === "Joker" ? "very large" : "large"} hasLink />
        ))}
      </div>
    </>
  );
}
