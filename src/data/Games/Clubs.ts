import type { GameData } from "../../pages/api/games/[gameID]";

export const ClubsGames: GameData[] = [
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
  {
    id: "4C",
    cardName: "4 of Clubs",
    name: "Runaway",
    players: [],
    additionalPlayers: ["Gentle Girl", "Kaito Yamane"],
    citizens: ["Keiichi Kuzuryu - King of Diamonds"],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "50 minutes",
      },
      rules: [
        "The tunnel is 10km long",
        "The players must endure the four trials and reach the GOAL in time",
        "The four trials are a cheetah, which is released after 10 minutes, crocodiles and water, released after 20 minutes, snowstorm after 30 minutes, and an explosion after 50 minutes",
      ],
      details:
        "Shortly after the beginning of game, a bus can be found covered in the same graffiti the entrance had. The bus cannot move due to the belt being cut. In the glove compartment is a Japanese-English Dictionary.",
      solution:
        "The bus was the GOAL. It had the word GOAL spray painted in graffiti and the dictionary provides a translation for both 'Goal' and 'Runaway' (A victory that is easily obtained). The bus was extremely durable and had a heater, which would've allowed each player to survive the game. In this game, only the ones who didn't ignore an 'injured player' would've cleared it. The biggest giveaway that something was wrong was the difficulty. The fact that the difficulty wasn't Spades and was a low Clubs even with the fairly difficult trials foreshadows at the easy solution.",
    },
  },
];
