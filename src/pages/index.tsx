import styles from "../styles/index.module.scss";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "../utils/api";

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
          <p className={styles.showcaseText}>
            {JSON.stringify(usagi, undefined, 4) ?? "Loading..."}
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
