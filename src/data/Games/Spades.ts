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
  {
    id: "5S",
    cardName: "5 of Spades",
    name: "Tag",
    players: ["Arisu", "Karube", "Usagi", "Chishiya"],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "20 minutes",
      },
      rules: [
        "Everyone in the complex will be running from the 'Oni', also known as 'It'",
        "There is an unlocked room in the complex which is the 'safe zone'",
        "It is GAME CLEAR if a player finds and touches the 'safe zone' within the time limit",
        "It is GAME OVER if the time limit is reached or if the 'Oni' kills all the players",
        "The 'Oni' is a dealer in charge of the game and is a muscular uzi-wielding horse masked individual",
        "The perimeter of the building is mined",
      ],
      details:
        "The apartment complex is 9 stories and is shaped in an L. There are 3 stairwells, one on each end and one at where the 2 corridors intersect. Although never stated in the rules, 2 players are needed to clear the game. To deactivate the bomb, there are 2 buttons a distance away in the safe zone which must be pressed simultaneously.",
      solution:
        "The safe zone was a room on the 4th floor. This was deduced by both Chishiya almost immediately and Arisu near the end of the game. Arisu noticed that there were bullet holes against the walls, but the judging from the angle, it couldn't have been shot from the same floor. When the 2 beginner unnamed players were on the 4th floor making their way to the door, the tagger shot at them from another floor, which was the only time the tagger shoots at such a long distance. This explains the angle of the bullet holes. The two realized that the only reason the tagger shot from so far was to protect the correct door.  The rules also never stated that climbing around the structure was forbidden. This was done countless times by Usagi when searching for the safe zone and climbing to help Arisu clear the game. Karube and 2 unnamed players also attempted to kill 'It'.",
    },
  },
  {
    id: "6S",
    cardName: "6 of Spades",
    players: ["Aguni", "Niragi"],
    additionalPlayers: ["Takatora Samura ('Last Boss')"],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "None",
      },
      rules: [
        "Everyone is a zebra. In the arena where players are preyed on by different animals, the only choices are fight or flight",
        "It is GAME CLEAR if all the predators are killed",
        "It is GAME OVER if all players are killed by the predators",
      ],
      details: "The wild animals that have to be killed includes, but isn't limited to, hyenas, lions, and cheetahs.",
      solution:
        "Niragi pointed out that the game seemed too easy to be a Six of Spades. He had a rifle to assist him, and Samura was able to kill at least 6 predators using his sword. Aguni used his bare hands to take down a cheetah. With no restrictions on weapons, it was very practical to bring them in.",
    },
  },
  {
    id: "7S",
    cardName: "7 of Spades",
    name: "Boiling Death",
    players: ["Akane"],
    additionalPlayers: ["Tsuyaruki Hatta"],
    description: {
      registration: {
        playerLimit: "None",
        timeLimit: "Until the venue is destroyed",
      },
      rules: [
        "The game takes place in a massive baseball stadium",
        "Shortly after all players arrive to the pitch, the game begins. A massive geyser, full of boiling water, erupts and starts destroying the stadium",
        "It is GAME CLEAR if the players can escape the venue before it is destroyed",
        "It is GAME OVER if all players die or if the venue fully collapses before they escape",
      ],
      details:
        "During the eruption, tens of thousands of litres of boiling water are ejected hundreds of feet into the air. In the ensuring aftermath, it floods the stadium which causes it to begin collapsing, making escape extremely dangerous. All 6 players, except for Heiya, were instantly killed upon the eruption.",
      solution:
        "One thing Heiya did was use a hot water pipe to cauterize a wound she received from when she got impaled by metal wiring. Hydration was key in this game. There are essentially no sage ways to collect water, so the only thing that could be done was to minimize water loss. Sweat should not be wiped down, or else the cooling process would take longer. Breathing deeply and slower cools the body down too. Heiya climbed through an air duct, but when she emerged, she decided to jump down since it was a dead end. This choice was reckless, and resulted in her losing her leg. What she could've done was climb on top of the vent instead of jumping down. To keep track of her direction, she could've also looked at the blood trail that she was leaving.",
    },
  },
];
