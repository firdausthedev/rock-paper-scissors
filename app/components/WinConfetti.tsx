"use client";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import AppContext from "./context/context";
import { useContext } from "react";
import { player } from "./context/types";

const WinConfetti = () => {
  const { width, height } = useWindowSize();
  const { state } = useContext(AppContext);
  if (!state.loading && state.lastWinner && state.lastWinner === player.user) {
    return <Confetti width={width} height={height} />;
  } else {
    return null;
  }
};

export default WinConfetti;
