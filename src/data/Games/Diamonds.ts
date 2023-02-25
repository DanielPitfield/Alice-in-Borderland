import type { GameData } from "../../pages/api/games/[gameID]";

export const DiamondsGames: GameData[] = [
  {
    id: "4D",
    cardName: "4 of Diamonds",
    players: ["An"],
    additionalPlayers: ["Taketo Serizawa"],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "Until the water reaches the electrical wires",
      },
      rules: [
        "Once all players enter the room, it begins to fill with water. Dangling from the ceiling are 4 severed electrical wires",
        "In the room there is one light-bulb and a door to an adjacent room where there are three switches",
        "There is one switch that connects to the light-bulb",
        "With the door closed, players may flip any switch. While the door is open, players may only flip the switch once",
        "The door will not close if there are people in both rooms or a switch is flipped",
        "It is GAME CLEAR if players can unanimously answer which switch turns on the light",
        "If the water level rises and the surface of the water touches the high current lines, it's GAME OVER",
      ],
      solution:
        "The solution is surprisingly simple. Close the door, and flip switch A on for until the water is just a few inch sea from the wires. Turn the switch off, immediately open the door, and flip switch B. If it doesn't turn on, it's not switch B. Then feel the light bulb. If it's hot, the answer is A. If not, then it's C. This can be done in any order with any switch.",
    },
  },
  {
    id: "6D",
    cardName: "6 of Diamonds",
    name: "Blackjack",
    players: ["Chishiya"],
    description: {
      registration: {
        playerLimit: 5,
        timeLimit: "60 minutes",
      },
      rules: [
        "Standard Blackjack rules apply",
        "Once all participants are seated with a noose around their neck, the game officially begins",
        "Players are not allowed to leave their seats at any point of the game",
        "In the event that a player is caught cheating, the other players will have a chance to exact judgement and shoot them, giving that player a GAME OVER. However, this can only be done once per player throughout the entire game",
        "Illegal transfer of chips or illegal restraint will result in GAME OVER",
        "Once a player's chip count reaches 0, it's GAME OVER",
        "It is GAME CLEAR for the last surviving player",
      ],
      details: "Players are given chips equivalent to the number of hours they have left on their visa.",
      solution:
        "Chisiya used the Card Counting Theory to win. All players also tried cheating at least once in various forms such as distracting opponents to flip the deck of cards as the dealer, using a reflective object to look at other people's cards, dealing the second card as the dealer not the top card, marking cards or hiding extra cards. A hidden solution would have been to choose one player to win and everybody else cheats so that this chosen player can shoot at the rope around their neck!",
    },
  },
  {
    id: "JD",
    cardName: "Jack of Diamonds",
    name: "Mahjong",
    players: ["Chishiya"],
    citizens: ["Amon Komayama - Jack of Diamonds"],
    description: {
      registration: {
        playerLimit: 3,
        timeLimit: "None",
      },
      rules: [
        "Standard Mahjong rules apply",
        "It is GAME CLEAR for the player who has the most points by the end of the game",
        "It is GAME OVER, for all players who place second or lower (their electric collar will explode)",
        "Players may not get up from their chair during the game, there is a trapdoor below their chair",
      ],
      details:
        "While in the manga Chishiya is the winner and sole survivor of the game, in the Netflix adaptation the three players appear to work together to defeat Amon Komayama.",
    },
  },
  {
    id: "QD",
    cardName: "Queen of Diamonds",
    players: [],
    description: {
      details:
        "This game is one of the exclusive 'Face Card' games seen in the Netflix adaptation. Details surrounding the game and its rules are left unknown. The only footage of the game has several exhausted and injured players triumphantly exiting the venue after the blimp falls down.",
    },
  },
  {
    id: "KD",
    cardName: "King of Diamonds",
    name: "Beauty Contest",
    players: ["Chishiya"],
    additionalPlayers: ["Hinako Daimon", "Takashi Asuma", "Benzo Yashige"],
    citizens: ["Keiichi Kuzuryu - King of Diamonds"],
    description: {
      registration: {
        playerLimit: 4,
        timeLimit: "1 minute per round",
      },
      rules: [
        "Upon entering, all players must shackle themselves to a seat. Above their heads is a weight/equilibrium stand that holds a corrosive liquid",
        "All players select a number between 0 and 100 for each round. The average of the values will be multiplied by 0.8. The person who chooses the number closest to this average wins the round. All losers will lose a point",
        "A new rule is introduced for every player eliminated",
        "If 2 or more people choose the same number, the number they choose becomes invalid and they will lose a point, even if the number is closest to the average",
        "When there are 3 players remaining if there is a person who chooses the exact correct number, the loser penalty is doubled",
        "When there are only 2 players remaining, if someone chooses 0, the player who chooses 100 is the winner",
      ],
      details:
        "With the rules applied when there are just two players left, the game essentially becomes a game of rock, paper, scissors between the numbers 0, 1, and 100.",
      solution:
        "When there are only 2 players left, it is the most ideal for the person who is behind in points to choose 100, and for the person in the lead to select 1 or 0. Although 0 is the most powerful number to choose from, it is also balanced by the opponent choosing 100.",
    },
  },
];
