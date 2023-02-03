import type { GameData } from "../pages/api/games/[gameID]";

export const games: GameData[] = [
  {
    id: "2H",
    name: "2 of Hearts",
    status: "Cleared",
    players: ["Saori"],
    description:
      "Each train consists of 4 carriages. The game will not begin until each player boards a different train. Only one player is allowed to board each train. Each train consists of 4 carriages. One of the 4 rooms is filled with a lethal poisonous gas. If entered without a canister of oxygen, it is Game over. Each player is given a gas mask and 3 cylinders of air and each cylinder provides 5 minutes worth of air. Once a player enters a carriage, the door to the next carriage will not open for 5 minutes, meaning the player has to use up the canister no matter what. This essentially means each player will have to choose one carriage to enter without a mask, and hope that it isn't the carriage that contains the poison. It's Game Clear if the player passes all 4 carriages.",
  },
];
