"use client";

import React, { createContext, ReactNode, useReducer } from "react";
import gameReducer from "./reducer";
import { GameActionTypes, GameState } from "./types";

const initialState: GameState = {
  ruleModalOpen: false,
  score: 0,
  userChoice: null,
  houseChoice: null,
  loading: true,
  battle: false,
  lastWinner: null,
};

const AppContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameActionTypes>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
