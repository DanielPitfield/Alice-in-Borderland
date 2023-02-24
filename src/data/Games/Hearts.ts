import type { GameData } from "../../pages/api/games/[gameID]";

export const HeartsGames: GameData[] = [
  {
    id: "2H",
    cardName: "2 of Hearts",
    players: ["Saori"],
    description: {
      registration: {
        playerLimit: 3,
        timeLimit: "None",
      },
      rules: [
        "Each train consists of 4 carriages. The game will not begin until each player boards a different train",
        "One of the 4 carriages is filled with a lethal poisonous gas. If entered without a canister of oxygen, it is GAME OVER",
        "Each player is given a gas mask and 3 cylinders of air and each cylinder provides 5 minutes worth of air",
        "Once a player enters a carriage, the door to the next carriage will not open for 5 minutes, meaning the player has to use up the canister no matter what. This essentially means each player will have to choose one carriage to enter without a mask, and hope that it isn't the carriage that contains the poison",
        "It's GAME CLEAR if the player passes all 4 carriages",
      ],
      details:
        "In each carriage is a vase of flowers. In safe rooms, the flowers are blooming. In the room with the poison, the flowers are wilted and dead.",
      solution:
        "The carriage which contains the poison is the 4th and final carriage. In the Borderlands, one must constantly bet their lives. Those who do not have the courage to open an earlier door without a mask do not have the will to survive, and they will be the ones who die in this game.",
    },
  },
  {
    id: "4H",
    cardName: "4 of Hearts",
    name: "Survey",
    players: ["Arisu"],
    additionalPlayers: ["Hayato Dodo"],
    description: {
      registration: {
        playerLimit: 5,
        timeLimit: "1 minute per question",
      },
      rules: [
        "The game will not begin until each player enters a window cleaning lift",
        "Each player starts at the 10th floor of the building",
        "A question will appear on the screen. Below the question shows collected answers from a survey. The data has a majority and a minority. Players must select whether the majority of people surveyed were correct, or whether the minority of people surveyed were correct",
        "Answering correctly with a majority moves the lift up 1 floor, answering correctly with a minority moves the lift up 2 floors",
        "Answering incorrectly with a majority moves the lift down 1 floor and gives the player a high current shock, answering incorrectly with a minority results in GAME OVER",
        "Tricking another player into picking the wrong answer grants a bonus 5 floors up in addition to the floors moved up when answering correctly",
        "It is GAME CLEAR if the 20th floor is reached",
        "It is GAME OVER if the ground floor is reached",
      ],
      details:
        "The questions start off extremely simple but progressively become harder and harder, eventually becoming absurd. However, starting from the 10th question, the survey data is omitted, and the questions, instead of obscure trivia, are ones about the office building which is the venue for the game. Essentially, it's now a guessing game with 50/50 odds.",
      solution:
        "The waiting room where all players enter and register had a selection of pamphlets containing all the answers to the 10th question and onward! If all players continuously answered majority for all the questions they were unsure about, then brought the pamphlet along for the questions after the 10th question, all players would've been able to clear the game without any guessing.",
    },
  },
  {
    id: "7H",
    cardName: "7 of Hearts",
    name: "Hide and Seek",
    players: ["Arisu", "Karube", "Chota", "Saori"],
    description: {
      registration: {
        playerLimit: 4,
        timeLimit: "10 minutes",
      },
      rules: [
        "Before proceeding, all players must equip a headset. This includes an eyepiece and microphone connected to an explosive collar",
        "One player becomes the wolf at random, and the remaining three become sheep",
        "The sheep shall try to avoid the gaze of the wolf",
        "If the wolf has eye contact with a sheep, the sensor reacts and the sheep becomes the wolf",
        "After a new wolf is created, the sheep cannot become a wolf for the next 3 seconds",
        "Once the time limit is reached, it is GAME CLEAR for the wolf but GAME OVER for all the sheep (their collars will explode)",
      ],
      details:
        "There is a large array of gardening tools and weapons provided, any of which may be used. The eyepieces have an advanced eye-tracking system, which allows for the game to function precisely. To add more psychological brutality, the headsets have microphones and transmit what someone says to everyone else.",
      solution:
        "Although unconfirmed, a highly popular theory revolves around the fact that if a sheep were to cut the wolf's wire, then it wouldn't explode, since the wolf's collar is the one with no risk of explosion. After having their wire cut, the wolf should transfer their role to a sheep, where they will do the same. Once 3 players have had their wires cut, the game will be complete (the final person will have the wolf role so theirs doesn't need to be cut). This solution may have been hinted towards, as during the rule demonstration, all the sheep were drawn 'hiding' behind the wolf, which suggests the sheep were behind the wolf to dismantle its collar, not to hide.",
    },
  },
  {
    id: "9H",
    cardName: "9 of Hearts",
    name: "Earth Invasion",
    players: ["Arisu"],
    additionalPlayers: ["Masatsugu Kito", "Himari Horikawa", "Nanase Onoue", "Yuzuru Horikawa", "Naomichi Taiga"],
    description: {
      registration: {
        playerLimit: 7,
        timeLimit: "10 minutes per round",
      },
      rules: [
        "The game is played in 6 rounds. Upon the time limit, the whole venue will be 'invaded by aliens' each round. In order to survive an alien invasion, the player must hide in a refuge pod before the time limit of that round",
        "A player who cannot enter a refuge pod will face alien invasion, and it means GAME OVER for that player",
        "Each pod has a maximum capacity",
        "In order to gain access to a pod, each player's phone must use up a 'Life' card received from another phone",
        "Each participant is given a phone which displays 6 Life cards and 1 Death card, along with an avatar of all the other players. A card can be given to an individual by dragging the card icon to their avatar icon. The recipient's phone shows what card they have received receives, but does not show who gave them the card",
        "Each round a phone can only deal one single Life card. The Death cards are independent from Life cards and can be dealt at any time. Receiving a Death card will nullify one received Life card",
        "It is GAME CLEAR if players deal all of their cards before the end",
        "It is GAME OVER for a player if they aren't able to enter a pod in time or enter a pod without a valid life card",
      ],
      details:
        "This is the only game in the Alice in Borderland series to not reward a VISA, and instead reward the freedom to return to the original world instantly.",
      solution:
        "There was a body of a previous player shown at the start. The players should have chosen to give the death cards to this player (who is already dead). The capacity of a pod was also increased in each round from 1 player to 3 players, therefore allowing for a GAME CLEAR situation where all players pass, as hinted to by the lines 'This is a game designed for those who wants their loved one to live and will guarantee their survival. In the face of the alien invasion, please protect those you cherish'.",
    },
  },
  {
    id: "10H",
    cardName: "10 of Hearts",
    name: "Witch Hunt",
    players: ["Arisu", "Usagi", "Tatta", "Kuina", "Niragi", "An", "Aguni", "Chishiya", "Momoka", "Asahi"],
    additionalPlayers: ["Beach residents"],
    description: {
      registration: {
        playerLimit: 66,
        timeLimit: "2 hours",
      },
      rules: [
        "Momoka Inoue has been murdered, a 'Witch' stabbed her in the chest with a knife",
        "The witch who took her life is hiding among the members of the Beach",
        "The murderer is just a witch in title, it can be a man or a woman",
        "Should the players find the witch, exact divine judgment, and burn their body along with their wretched soul in the Fire of Judgement, it's GAME CLEAR",
        "It's GAME OVER if the witch survives for 2 hours",
        "There is no penalty for throwing an innocent player into the fire",
      ],
      details:
        "It is the only game shown to have changed difficulties. Out of all the numbered games, 'Witch Hunt' was the game shown to have the highest number of participants as well as the highest number of deaths. This was the final numbered game that needed to be cleared to move on to the Second Stage.",
      solution:
        "The witch was actually Momoka herself. This was deduced by An after analyzing the fingerprints on the knife, and by Arisu after he realized the true nature of Hearts games.",
    },
  },
];
