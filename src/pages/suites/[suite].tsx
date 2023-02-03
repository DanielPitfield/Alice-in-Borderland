import styles from "../../styles/Card.module.scss";

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Card from "../../components/Card";
import type { CardName, CardSuite } from "../../data/Cards/cardMappings";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { suite: "Clubs" as CardSuite } },
      { params: { suite: "Diamonds" as CardSuite } },
      { params: { suite: "Hearts" as CardSuite } },
      { params: { suite: "Spades" as CardSuite } },
    ],
    fallback: "blocking",
  };
};

export function getStaticProps(context: GetStaticPropsContext<{ suite: CardSuite }>) {
  const suite = context.params?.suite as CardSuite;

  return {
    props: {
      suite,
    },
    revalidate: 1,
  };
}

export default function SuitePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!props.suite) {
    return null;
  }

  // TODO: All the cards of the suite, not these hardcoded ones
  const allCards: CardName[] = ["10 of Clubs", "10 of Diamonds"];

  return (
    <>
      <h1>{props.suite}</h1>
      <div className={styles.cardWrapper}>
        {allCards.map((card) => (
          <Card key={card} card={card} />
        ))}
      </div>
    </>
  );
}
