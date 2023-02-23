import type { GameData } from "../../pages/api/games/[gameID]";

export const SpadesGames: GameData[] = [
  {
    id: "2S",
    cardName: "2 of Spades",
    name: "Human Elevator",
    players: ["Usagi"],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "None",
      },
      rules: [
        "Players must hang onto the bottom of an elevator as it rises to the top of a building",
        "It is GAME CLEAR if the player manages to hold onto the elevator the entire game",
        "It is GAME OVER if the player falls off the elevator",
      ],
      details:
        "Throughout the journey upwards, the elevator will occasionally stop moving for unspecified amounts of time, thus making the game last much longer than necessary and increasing strain on players' stamina.",
      solution: "",
    },
  },
  {
    id: "3S",
    cardName: "3 of Spades",
    name: "Theme Park",
    players: ["Kyuma"],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "None",
      },
      rules: [
        "It is GAME CLEAR if the players can reach the exit without getting caught by the mascots",
        "It is GAME OVER if the mascots kill all players",
      ],
      details: "Each mascot is armed with a crossbow.",
      solution:
        "To divert attention away from his hiding injured friend, Kisaragi, who was about to be found by a mascot, Kyūma screamed a taunt at the top of his lungs. Using the distraction, he carried her to the exit where the other 3 were waiting, and they all cleared the game.",
    },
  },
];
