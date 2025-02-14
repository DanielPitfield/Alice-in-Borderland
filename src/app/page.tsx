import styles from "../styles/index.module.scss";

import Image from "next/image";
import BannerImage from "../../public/Images/Banner.jpg";
import SocialMediaButton from "../components/SocialMediaButton";
import { SocialMediaNames } from "../data/SocialMedia";

export default async function Page() {
  return (
    <section className={styles.container}>
      <aside className={styles.navigation}>
        <div className={styles.wrapper}>
          <p className={styles.description}>All the trivia from the hit Netflix adaptation Alice in Borderland!</p>

          <ul className={styles.list}>
            {SocialMediaNames.map((name) => (
              <SocialMediaButton key={name} name={name} />
            ))}
          </ul>
        </div>
      </aside>

      <div className={styles.imageWrapper}>
        <Image src={BannerImage} alt="Banner" priority fill />
      </div>
    </section>
  );
}
