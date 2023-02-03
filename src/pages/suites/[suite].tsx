import styles from "../../styles/Card.module.scss";

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Card from "../../components/Card";
import { type CardName, CardSuites, CardRanks, cardSuiteMappings } from "../../data/Cards/cardMappings";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: CardSuites.map((suite) => ({
      params: {
        suite,
      },
    })),
    fallback: false,
  };
};

export function getStaticProps(context: GetStaticPropsContext<{ suite: string }>) {
  // TODO: Can the dynamic segment be typed as something other than string?
  const suite = context.params?.suite as string;
  const description: string | undefined = cardSuiteMappings.find(
    (x) => x.suite.toLowerCase() === suite.toLowerCase()
  )?.description;

  return {
    props: {
      suite,
      description
    },
    revalidate: 1,
  };
}

export default function SuitePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!props.suite) {
    return null;
  }

  // Dynamic segment is not one of the four card suites
  if (!CardSuites.some((suite) => suite === props.suite)) {
    return null;
  }

  // Every CardName of the suite
  const allCards: CardName[] = CardRanks.map((rank) => {
    return `${rank} of ${props.suite}` as CardName;
  });

  return (
    <>
      <h1>{props.suite}</h1>
      {props.description && (<h3>{props.description}</h3>)}
      <div className={styles.cardWrapper}>
        {allCards.map((card) => (
          <Card key={card} card={card} size={"large"} />
        ))}
      </div>
    </>
  );
}
