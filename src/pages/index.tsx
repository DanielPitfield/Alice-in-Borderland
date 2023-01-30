import styles from "../styles/index.module.scss";
import { api } from "../utils/api";

import { type NextPage } from "next";
import Head from "next/head";
import Character from "../components/Character";

const Home: NextPage = () => {
  const { data: usagi } = api.character.getInfo.useQuery({ characterID: "2" });

  return (
    <>
      <Head>
        <title>Alice in Borderland</title>
        <meta
          name="description"
          content="A website for everything Alice in Borderland (the TV show)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Character characterData={usagi} />
        </div>
      </main>
    </>
  );
};

export default Home;
