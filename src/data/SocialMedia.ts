import type { IconType } from "react-icons/lib";

import { RiNetflixFill } from "react-icons/ri";
import { FaImdb } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

export const SocialMediaNames = ["Netflix", "IMDb", "Reddit"] as const;
export type SocialMediaName = typeof SocialMediaNames[number];

export const socialMediaMappings: { name: SocialMediaName; icon: IconType; text: string; link: string }[] = [
  { name: "Netflix", icon: RiNetflixFill, text: "Watch on Netflix", link: "https://www.netflix.com/title/80200575" },
  { name: "IMDb", icon: FaImdb, text: "View on IMDb", link: "https://www.imdb.com/title/tt10795658/" },
  { name: "Reddit", icon: FaReddit, text: "Browse Subreddit", link: "https://www.reddit.com/r/AliceInBorderlandLive/" },
];
