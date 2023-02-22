import type { StaticImageData } from "next/image";
import type { PersonName } from "./AllPeople";

import Usagi from "../../../public/Images/Usagi.gif";
import Kuina from "../../../public/Images/Kuina.jpg";

export const PersonImageMappings: { name: PersonName; image: StaticImageData }[] = [{ name: "Usagi", image: Usagi }, {name: "Kuina", image: Kuina}];
