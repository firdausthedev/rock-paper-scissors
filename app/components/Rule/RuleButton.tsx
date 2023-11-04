"use client";

import { useContext } from "react";
import AppContext from "../context/context";
import { GameActionType } from "../context/types";

const RuleButton = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <button
      type="button"
      onClick={() =>
        dispatch({ type: GameActionType.SET_RULE_MODAL, payload: true })
      }
      className="flex mt-20 w-fit  mx-auto z-50
      transition-colors duration-300 rounded-xl border border-white/60 px-8 py-2
    tracking-widest text-white/90 hover:bg-white hover:text-darkText
    md:fixed md:bottom-8 md:left-auto md:right-8 md:translate-x-0 md:px-10">
      RULES
    </button>
  );
};

export default RuleButton;
