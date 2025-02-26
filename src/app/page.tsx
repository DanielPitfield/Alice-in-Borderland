import styles from "../styles/index.module.scss";

import Image, { StaticImageData } from "next/image";
import BannerImage from "../../public/Images/Banner.jpg";
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

          <Link href="/cards">
            <li className={styles.cards}>
              <Card card="Joker" size="small" hasLink={false} />
              Cards
            </li>
          </Link>
        </ul>
      </aside>

      <div className={styles.banner}>
        <Image src={BannerImage} alt="Banner" priority fill />
      </div>
    </div>
  );
}
