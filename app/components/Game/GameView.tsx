"use client";

import AppContext from "../context/context";
import GameBattle from "./GameBattle";
import GameButtonView from "./GameButtonView";
import { useContext } from "react";

const GameView = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      {!state.battle && <GameButtonView />}
      {state.battle && <GameBattle />}
    </div>
  );
};

export default GameView;
