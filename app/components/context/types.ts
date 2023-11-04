export enum choices {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  spock = "spock",
  lizard = "lizard",
}

export enum player {
  user = "user",
  house = "house",
}

export interface GameState {
  ruleModalOpen: boolean;
  score: number;
  userChoice: choices | null;
  houseChoice: choices | null;
  loading: boolean;
  battle: boolean;
  lastWinner: player | null;
}

export enum GameActionType {
  SET_RULE_MODAL,
  SET_SCORE,
  SET_USER_CHOICE,
  SET_HOUSE_CHOICE,
  SET_LOADING,
  SET_BATTLE,
  SET_LAST_WINNER,
}

export type GameActionTypes =
  | { type: GameActionType.SET_RULE_MODAL; payload: boolean }
  | { type: GameActionType.SET_USER_CHOICE; payload: choices }
  | { type: GameActionType.SET_HOUSE_CHOICE; payload: choices | null }
  | { type: GameActionType.SET_LOADING; payload: boolean }
  | {
      type: GameActionType.SET_BATTLE;
      payload: { battle: boolean; userChoice: choices | null };
    }
  | { type: GameActionType.SET_LAST_WINNER; payload: player | null }
  | { type: GameActionType.SET_SCORE; payload: number };
