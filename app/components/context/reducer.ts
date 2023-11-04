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
    case GameActionType.SET_USER_CHOICE:
      return {
        ...state,
        userChoice: action.payload,
      };
    case GameActionType.SET_HOUSE_CHOICE:
      return {
        ...state,
        houseChoice: action.payload,
      };
    case GameActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GameActionType.SET_LAST_WINNER:
      return {
        ...state,
        lastWinner: action.payload,
      };
    case GameActionType.SET_BATTLE:
      return {
        ...state,
        battle: action.payload.battle,
        userChoice: action.payload.userChoice,
      };
    default:
      return state;
  }
};

export default gameReducer;
