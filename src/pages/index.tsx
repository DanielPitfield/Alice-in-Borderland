import styles from "../styles/index.module.scss";

import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BannerImage from "../../public/Images/banner.jpg";
import SocialMediaButton from "../components/SocialMediaButton";
import { SocialMediaNames } from "../data/SocialMedia";

const Home: NextPage = () => {
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
            <ul className={styles.list}>
              {SocialMediaNames.map((name) => (
                <SocialMediaButton key={name} name={name} />
              ))}
            </ul>
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
