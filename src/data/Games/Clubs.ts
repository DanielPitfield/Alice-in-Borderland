import type { GameData } from "../../pages/api/games/[gameID]";

export const ClubsGames: GameData[] = [
  {
    id: "2C",
    cardName: "2 of Clubs",
    name: "Hunting Competition",
    isNetflixExclusive: true,
    players: [],
    description: {
      details: "Team-based running and chasing game",
    },
  },
  {
    id: "3C",
    cardName: "3 of Clubs",
    name: "Good Fortune, Bad Fortune",
    isNetflixExclusive: false,
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
    isNetflixExclusive: false,
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
  {
    id: "10C",
    cardName: "10 of Clubs",
    name: "Bingo in Match Factory",
    isNetflixExclusive: true,
    players: ["Usagi"],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "None",
      },
      rules: [
        "There are 25 massive rooms total in a 5 x 5 grid. Like in standard bingo, the central space is free",
        "There is a number in each of the 24 rooms to find, and once the number is found it is added to the bingo card",
        "Players are given only nine matchsticks each, so they must use them wisely",
        "It is GAME OVER for the players who have used up all their matches",
        "If all numbers found complete a row, column, or diagonal on a bingo sheet, it is GAME CLEAR for all surviving players",
      ],
      details:
        "The entire game venue is in complete and utter darkness, so using the matchsticks is completely necessary. If a player burns all nine of their matchsticks, they're lasered.",
    },
  },
  {
    id: "JC",
    cardName: "Jack of Clubs",
    isNetflixExclusive: true,
    players: [],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "None",
      },
      rules: [
        "Players are allowed to swing and jump onto other ropes",
        "Players are also allowed to kick other players off the ropes",
        "It is GAME OVER if a player gets kicked off their rope",
        "It is GAME OVER if a player fails to hold onto a rope below the the spotlight platform",
      ],
      details:
        "This game takes place in the same building as the Jack of Spades game. Inside the building, there are various ropes hanging at different levels of the venue, each at different lengths. Some ropes are hung from the spotlight platform, and others at the ceiling of the building.",
    },
  },
  {
    id: "QC",
    cardName: "Queen of Clubs",
    name: "Target",
    isNetflixExclusive: true,
    players: ["Kuina", "An"],
    description: {
      registration: {
        playerLimit: 14,
        timeLimit: "None",
      },
      rules: [
        "Players must group themselves into pairs",
        "Each pair occupies a narrow beam in the venue and must throw glowing balls at their opponents to knock them off their beams",
        "It is GAME CLEAR if the players were able to knock off the citizens off their beam",
        "It is GAME OVER if a player falls off their own beam",
      ],
      details: "There are seven beams and in between each is an empty pit below.",
      solution: "Determine who the citizen are and knock them or be the last person/group standing on the beam.",
    },
  },
  {
    id: "KC",
    cardName: "King of Clubs",
    name: "Osmosis",
    isNetflixExclusive: false,
    players: ["Arisu", "Kuina", "Usagi", "Niragi", "Tatta"],
    citizens: [
      "Kyuma - King of Clubs",
      "Kanzaki - King of Clubs",
      "Kisaragi - King of Clubs",
      "Maki - King of Clubs",
      "Shitara - King of Clubs",
    ],
    description: {
      registration: {
        playerLimit: 5,
        timeLimit: "2 hours",
      },
      rules: [
        "Each player must equip one of the provided bracelets before entering the venue",
        "No participant may bring in any weapon or any metallic object to the venue",
        "Each team starts with 10,000 points in total. Members of each team are free to distribute the points amongst its members as they see fit, with a minimum of 100 points per person. The teams each have their respective bases, which are tall posts with what looks like a plasma globe on the top. The game only begins once all the points have been distributed among the players",
        "There are three ways to obtain points - Battle, Item, and Base. All points lost or gained affects the team total",
        "Battle - players must make physical contact with the opponent's body. The bracelet will sense the bioelectricity and initiate the game. The bracelets will reflect the points of the player and the opponent in the battle. The player with the greater number of points is the battle's winner. The loser will automatically transfer 500 points to the winner at the end of the battle. Team members may battle together by keeping physical contact when initiating a battle. There is no limit to the amount of players that can group together to battle and how the points are divided between team members that are connected is not disclosed. After each battle that results in an exchange in points, any further attempts of exchanging points is forbidden. If players accidentally or purposefully engage in a battle with a player in that state, both will be shocked with a high voltage electric current",
        "Items - There are six random items hidden in containers around the game arena with varying worth in points - 500, 1000, 1500, 2000, 2500 and 3,000. Once an item is found, the player will gain the points tied to the respective item upon physical contact",
        "Base - The base is a place where an infinite number of points is stored. If a player were to successfully touch the base of the opposing team, they're rewarded with 10000 points. When making contact with one's own base, that player will have an infinite amount of points. In this event, the points transferred will be 10,000 points from the loser to the winner. Once the player breaks contact with their own team's base, their points will resume to what it was prior to contact with the base in addition to points earned whilst in contact",
        "If a player's points falls below 0, it's GAME OVER for them",
        "It's GAME CLEAR for the team that has the most points by the end of the time limit",
        "It's GAME OVER for the team that has the least points by the end of the time limit",
      ],
      details:
        "This game is arguably one of the most complex games of the Borderlands in terms of rules and strategy. It was the first to be beaten during the Second Stage, being beaten on the first day of exhibitions, alongside the Queen of Diamonds.",
      solution:
        "One crucial detail that is never mentioned in the rules is that it isn't forbidden for players to carry 2 bracelets at a time, and when they do, the points from both bracelets are used in battle. Tatta sacrificed his arm so that Arisu could remove his bracelet and wear both and then trick Kyuma, who had calculated that no single member of Arisu's team had enough points to win a battle by themselves, into taking one last battle.",
    },
  },
];
