import styles from "../../styles/Card.module.scss";

import type { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Card from "../../components/Card";
import { type CardName, CardSuites } from "../../data/Cards/cardMappings";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: CardSuites.map((suite) => ({
      params: {
        suite,
      },
    })),
    fallback: "blocking",
  };
};

export function getStaticProps(context: GetStaticPropsContext<{ suite: string }>) {
  // TODO: Can the dynamic segment be typed as something other than string?
  const suite = context.params?.suite as string;

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

  if (!CardSuites.some((suite) => suite === props.suite)) {
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
