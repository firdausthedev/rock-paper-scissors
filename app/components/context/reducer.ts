import { GameActionType, GameActionTypes, GameState } from "./types";

const gameReducer = (state: GameState, action: GameActionTypes): GameState => {
  switch (action.type) {
    case GameActionType.SET_RULE_MODAL:
      return {
        ...state,
        ruleModalOpen: action.payload,
      };
    case GameActionType.SET_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
