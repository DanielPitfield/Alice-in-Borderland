import styles from "../styles/index.module.scss";

import { type NextPage } from "next";
import Head from "next/head";
import CardWall from "../components/CardWall";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alice in Borderland</title>
        <meta name="description" content="A website for everything Alice in Borderland (the TV show)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CardWall />
    </>
  );
};

export default Home;
