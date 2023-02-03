import styles from "../styles/index.module.scss";

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alice in Borderland</title>
        <meta name="description" content="A website for everything Alice in Borderland (the TV show)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.wrapper}>
        <h3>Characters</h3>

        <Link href={"/people/Arisu"}>Arisu</Link>
        <Link href={"/people/Usagi"}>Usagi</Link>

        <h3>Suites</h3>

        <Link href={"/suites/Clubs"}>Clubs</Link>
        <Link href={"/suites/Diamonds"}>Diamonds</Link>
        <Link href={"/suites/Hearts"}>Hearts</Link>
        <Link href={"/suites/Spades"}>Spades</Link>
      </main>
    </>
  );
};

export default Home;
