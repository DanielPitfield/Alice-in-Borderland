import styles from "../styles/index.module.scss";

import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BannerImage from "../../public/Images/banner.jpg";

const Home: NextPage = () => {
  // TODO: Add "Watch on Netflix" link below description
  // TODO: Add "View on IMDB" link below description
  // TODO: Add "View subreddit" link below description

  return (
    <>
      <Head>
        <title>Alice in Borderland</title>
        <meta name="description" content="A website for everything Alice in Borderland (the TV show)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.wrapper}>
        <aside className={styles.navigation}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>Alice in Borderland</h1>
            <p className={styles.description}>All the trivia from the hit Netflix adaptation Alice in Borderland!</p>
          </div>
        </aside>
        <div className={styles.imageWrapper}>
          <Image src={BannerImage} alt="Banner" fill />
        </div>
      </section>
    </>
  );
};

export default Home;
