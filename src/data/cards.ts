export type CardRank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "Jack"
  | "Queen"
  | "King";

export type CardSuite = "Clubs" | "Diamonds" | "Spades" | "Hearts";

export type CardName<
  CardRank extends string,
  CardSuite extends string
> = `${CardRank} of ${CardSuite}`;