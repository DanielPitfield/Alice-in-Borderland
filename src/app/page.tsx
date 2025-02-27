import styles from "../styles/index.module.scss";

import Image, { StaticImageData } from "next/image";
import BannerImage from "../../public/Images/Banner.png";
import Link from "next/link";
import Card from "../components/Card";
import { People } from "../data/People/AllPeople";
import { PersonImageMappings } from "../data/People/PersonImageMappings";

export default async function Page() {
  return (
    <div className={styles.container}>
      <aside>
        <ul>
          {People.map((person) => {
            const image: StaticImageData | undefined = PersonImageMappings.find((x) => x.name === person.name)?.image;

            return (
              <li key={person.id}>
                <Link href={`/people/${person.name}`}>
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
                </Link>
              </li>
            );
          })}

          <li className={styles.cards}>
            <Link href="/cards">
              <Card card="Joker" size="small" hasLink={false} />
              Cards
            </Link>
          </li>
        </ul>
      </aside>

      <div className={styles.banner}>
        <Image src={BannerImage} alt="Banner" priority fill />
      </div>
    </div>
  );
}
