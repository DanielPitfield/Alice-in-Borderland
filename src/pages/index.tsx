import styles from "../styles/index.module.scss";

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
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
        <Link className={styles.link} href={"/characters/1"}>Arisu</Link>
        <Link className={styles.link} href={"/characters/2"}>Usagi</Link>
      </main>
    </>
  );
};

export default Home;
