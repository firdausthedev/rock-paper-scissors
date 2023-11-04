"use client";

import Image from "next/image";
import lizard from "../../assets/images/icon-lizard.svg";
import paper from "../../assets/images/icon-paper.svg";
import rock from "../../assets/images/icon-rock.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import spock from "../../assets/images/icon-spock.svg";
import { GameActionType, choices } from "../context/types";
import { useContext } from "react";
import AppContext from "../context/context";

const GameButton = ({ type }: { type: choices }) => {
  const { dispatch } = useContext(AppContext);

  const handleButtonClick = (type: choices) => {
    dispatch({
      type: GameActionType.SET_BATTLE,
      payload: { battle: true, userChoice: type },
    });
  };

  const imageSelector = (type: choices) => {
    switch (type) {
      case choices.scissors:
        return scissors;
      case choices.spock:
        return spock;
      case choices.paper:
        return paper;
      case choices.lizard:
        return lizard;
      case choices.rock:
        return rock;
      default:
        return scissors;
    }
  };

  const styleSelector = (type: choices) => {
    switch (type) {
      case choices.scissors:
        return "bg-gradient-to-b from-scissors to-scissors-end -top-14 left-1/2 -translate-x-1/2 md:-top-20";
      case choices.spock:
        return "bg-gradient-to-b from-spock to-spock-end -left-4 top-6 md:-left-16 md:top-12";
      case choices.paper:
        return "bg-gradient-to-b from-paper to-paper-end -right-4 top-6 md:-right-16 md:top-12";
      case choices.lizard:
        return "bg-gradient-to-b from-lizard to-lizard-end -bottom-10 left-6 md:-bottom-20 md:left-0";
      case choices.rock:
        return "bg-gradient-to-b from-rock to-rock-end -bottom-10 right-6 md:-bottom-20 md:right-0";
      default:
        return "bg-gradient-to-b from-scissors to-scissors-end -top-14 left-1/2 -translate-x-1/2 md:-top-20";
    }
  };

  const baseButtonStyle =
    "absolute h-24 w-24 rounded-full p-3 shadow-outerRing md:p-5 md:h-[150px] md:w-[150px] hover:brightness-125";

  return (
    <button
      aria-label={`button ${type}`}
      type="button"
      onClick={() => handleButtonClick(type)}
      className={`${baseButtonStyle} ${styleSelector(type)}`}>
      <div
        className="
          shadow-innerRing flex h-full w-full 
          items-center justify-center rounded-full bg-gray-200">
        <Image
          width={0}
          height={0}
          src={imageSelector(type)}
          alt={`icon ${type}`}
          className="w-1/2 select-none "
        />
      </div>
    </button>
  );
};

export default GameButton;
