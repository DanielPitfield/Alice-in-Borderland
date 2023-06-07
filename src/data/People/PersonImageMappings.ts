import type { StaticImageData } from "next/image";
import type { PersonName } from "./AllPeople";

import Arisu from "../../../public/Images/Arisu.jpg";
import Usagi from "../../../public/Images/Usagi.jpg";
import Kuina from "../../../public/Images/Kuina.jpg";
import Chishiya from "../../../public/Images/Chishiya.jpg";
import Aguni from "../../../public/Images/Aguni.jpg";
import Niragi from "../../../public/Images/Niragi.jpg";
import Mira from "../../../public/Images/Mira.jpg";
import Saori from "../../../public/Images/Saori.jpg";
import Karube from "../../../public/Images/Karube.jpg";
import Chota from "../../../public/Images/Chota.jpg";
import Hatter from "../../../public/Images/Hatter.jpg";
import Akane from "../../../public/Images/Akane.jpg";
import Momoka from "../../../public/Images/Momoka.jpg";
import Asahi from "../../../public/Images/Asahi.jpg";
import Tatta from "../../../public/Images/Tatta.jpg";
import An from "../../../public/Images/An.jpg";
import Kyuma from "../../../public/Images/Kyuma.jpg";

export const PersonImageMappings: { name: PersonName; image: StaticImageData }[] = [
  { name: "Arisu", image: Arisu },
  { name: "Usagi", image: Usagi },
  { name: "Kuina", image: Kuina },
  { name: "Chishiya", image: Chishiya },
  { name: "Aguni", image: Aguni },
  { name: "Niragi", image: Niragi },
  { name: "Mira", image: Mira },
  { name: "Saori", image: Saori },
  { name: "Karube", image: Karube },
  { name: "Chota", image: Chota },
  { name: "Hatter", image: Hatter },
  { name: "Akane", image: Akane },
  { name: "Momoka", image: Momoka },
  { name: "Asahi", image: Asahi },
  { name: "Tatta", image: Tatta },
  { name: "An", image: An },
  { name: "Kyuma", image: Kyuma },
];
