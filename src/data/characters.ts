import type { CharacterData } from "../pages/api/character/[characterID]";

export const characters: CharacterData[] = [
  {
    id: "1",
    name: "Arisu",
    japaneseName: "有栖 良平",
    gender: "Male",
    occupation: ["Licensed Psychologist", "School Counselor"],
    isBorderlandCitizen: false,
    gameSpeciality: ["Hearts"],
    gamesPlayed: [
      "3 of Clubs",
      "5 of Spades",
      "7 of Hearts",
      "4 of Hearts",
      "10 of Hearts",
      "King of Clubs",
      "King of Spades",
      "Queen of Hearts",
    ],
  },
  {
    id: "2",
    name: "Usagi",
    japaneseName: "宇佐木 柚葉",
    gender: "Female",
    occupation: ["Professional Climber", "Sports Trainer"],
    isBorderlandCitizen: false,
    gameSpeciality: ["Spades"],
    gamesPlayed: [
      "4 of Spades",
      "5 of Spades",
      "3 of Diamonds",
      "6 of Clubs",
      "10 of Hearts",
      "King of Clubs",
      "King of Spades",
      "Queen of Hearts",
    ],
  },
];
