import styles from "../styles/index.module.scss";

import Image, { StaticImageData } from "next/image";
import BannerImage from "../../public/Images/Banner.jpg";
import { CardSuites } from "../data/Cards/AllCards";
import Link from "next/link";
import { People } from "../data/People/AllPeople";
import { PersonImageMappings } from "../data/People/PersonImageMappings";

export default async function Page() {
  return (
    <section className={styles.container}>
      <aside className={styles.navigation}>
        <div className={styles.wrapper}>
          <section className={styles.panel}>
            <ul>
              {CardSuites.map((suite) => (
                <Link key={suite} href={`/suites/${suite}`}>
                  <li key={suite}>{suite}</li>
                </Link>
              ))}
            </ul>
          </section>

          <section className={styles.panel}>
            <ul>
              {People.map((person) => {
                const image: StaticImageData | undefined = PersonImageMappings.find(
                  (x) => x.name === person.name
                )?.image;

                return (
                  <Link key={person.id} href={`/people/${person.name}`}>
                    <li>
                      <div className={styles.imageWrapper}>
                        <Image
                          className={styles.image}
                          src={image ?? ""}
                          alt={person.name}
                          priority
                          width={60}
                          height={60}
                        />
                      </div>

                      {person.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </section>
        </div>
      </aside>

      <div className={styles.banner}>
        <Image src={BannerImage} alt="Banner" priority fill />
      </div>
    </section>
  );
}
