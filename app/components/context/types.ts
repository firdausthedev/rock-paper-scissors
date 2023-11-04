export enum choices {
  rock = "rock",
  paper = "paper",
  scissors = "scissors",
  spock = "spock",
  lizard = "lizard",
}

export interface GameState {
  ruleModalOpen: boolean;
  score: number;
}

export enum GameActionType {
  SET_RULE_MODAL,
  SET_SCORE,
}

export type GameActionTypes =
  | { type: GameActionType.SET_RULE_MODAL; payload: boolean }
  | { type: GameActionType.SET_SCORE; payload: number };
