export const SocialMediaNames = ["Netflix", "IMDb", "Reddit"] as const;
export type SocialMediaName = typeof SocialMediaNames[number];

export const socialMediaMappings: { name: SocialMediaName; text: string; link: string }[] = [
  { name: "Netflix", text: "Watch on Netflix", link: "https://www.netflix.com/title/80200575" },
  { name: "IMDb", text: "View on IMDb", link: "https://www.imdb.com/title/tt10795658/" },
  { name: "Reddit", text: "Browse Subreddit", link: "https://www.reddit.com/r/AliceInBorderlandLive/" },
];
