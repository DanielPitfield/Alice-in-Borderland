import styles from "../styles/CardWall.module.scss";

import CardWall from "../components/CardWall";

export default async function Page() {
  return (
    <section className={styles.wrapper}>
      <CardWall />
    </section>
  );
}
