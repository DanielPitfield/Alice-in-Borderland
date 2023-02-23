import type { StaticImageData } from "next/image";
import type { PersonName } from "./AllPeople";

import Arisu from "../../../public/Images/Arisu.jpg";
import Usagi from "../../../public/Images/Usagi.gif";
import Kuina from "../../../public/Images/Kuina.jpg";
import Chishiya from "../../../public/Images/Chishiya.webp";
import Aguni from "../../../public/Images/Aguni.jpg";
import Niragi from "../../../public/Images/Niragi.webp";
import Mira from "../../../public/Images/Mira.webp";
import Saori from "../../../public/Images/Saori.webp";
import Karube from "../../../public/Images/Karube.jpg";
import Chota from "../../../public/Images/Chota.jpg";
import Hatter from "../../../public/Images/Hatter.webp";
import Akane from "../../../public/Images/Akane.webp";
import Momoka from "../../../public/Images/Momoka.webp";
import Asahi from "../../../public/Images/Asahi.jpg";
import Tatta from "../../../public/Images/Tatta.jpg";
import An from "../../../public/Images/An.jpg";

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
];
