import type { GameData } from "../pages/api/games/[gameID]";

export const games: GameData[] = [
  {
    id: "2C",
    cardName: "2 of Clubs",
    name: "Hunting Competition",
    players: [],
    description: {
      details: "Team-based running and chasing game",
    },
  },
  {
    id: "3C",
    cardName: "3 of Clubs",
    name: "Good Fortune, Bad Fortune",
    players: ["Arisu", "Chota", "Karube", "Saori"],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "Until all lanterns go out",
        prize: "None",
      },
      rules: [
        "Each player draws a paper fortune",
        "Each fortune has a “luck” rating which dictates its difficulty of the question. Each question has a numeric integer answer, and should the players answer incorrectly then the penalty will be one flaming arrow shot at the venue per the difference between the correct and wrong answer",
        "It is GAME CLEAR when every player has drawn a paper fortune",
        "It is GAME OVER if any player has not drawn a paper fortune by the time all the lamps have gone out, or if all players are killed during the game",
      ],
      details:
        "There is one fortune which doesn't have a question, and that is the 'Best Luck' fortune, which was the first fortune drawn by Karube. Instead, it contains a cryptic message, containing the keywords 'Orientation: South'. The second fortune was drawn by Chota, and when the penalty was fired, the arrows came from train station. The third was drawn by Shibuki, and the arrows were fired from the mountains. The fourth was drawn by Arisu, and the arrows were fired from the hospital. Each of these fortunes also discreetly state in a corner of the paper 'West is evil', 'East is evil', and 'North is evil' respectively. These details seem arbitrary, but these directions are vital for figuring out the solution of the game.",
      solution:
        "Keeping in mind all the previous details, Arisu realized that the directionality of the arrow's fortune was a notice of the arrow's origin. South is good. At the south of the festival is a cellar which connects to sewage tunnels that lead to safety",
    },
  },
];
