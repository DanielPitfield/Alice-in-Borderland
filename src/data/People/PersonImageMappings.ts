import type { StaticImageData } from "next/image";
import type { PersonName } from "./AllPeople";

import Usagi from "../../../public/Images/Usagi.gif";

export const PersonImageMappings: { name: PersonName; image: StaticImageData }[] = [{ name: "Usagi", image: Usagi }];
