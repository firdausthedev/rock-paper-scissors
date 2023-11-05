"use client";
import Image from "next/image";
import lizard from "../../assets/images/icon-lizard.svg";
import paper from "../../assets/images/icon-paper.svg";
import rock from "../../assets/images/icon-rock.svg";
import scissors from "../../assets/images/icon-scissors.svg";
import spock from "../../assets/images/icon-spock.svg";
import AppContext from "../context/context";
import { useContext, useEffect } from "react";
import { GameActionType, choices, player } from "../context/types";
import { setHouseChoices, evalGame, getHouseChoice } from "../context/actions";
import { AnimatePresence, motion } from "framer-motion";

const GameBattle = () => {
  const { state, dispatch } = useContext(AppContext);

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
        return "bg-gradient-to-b from-scissors to-scissors-end";
      case choices.spock:
        return "bg-gradient-to-b from-spock to-spock-end";
      case choices.paper:
        return "bg-gradient-to-b from-paper to-paper-end";
      case choices.lizard:
        return "bg-gradient-to-b from-lizard to-lizard-end";
      case choices.rock:
        return "bg-gradient-to-b from-rock to-rock-end";
      default:
        return "bg-gradient-to-b from-scissors to-scissors-end";
    }
  };

  const baseButtonStyle = `
  h-32 w-32 rounded-full relative flex justify-center p-4 shadow-outerRing items-center z-10 
  md:h-52 md:w-52 md:p-6 lg:w-[300px] lg:h-[300px] lg:p-8 cursor-default`;

  const startGame = () => {
    const filteredChoices: choices[] = setHouseChoices(state.userChoice!);
    const housePick: choices = getHouseChoice(filteredChoices);

    dispatch({
      type: GameActionType.SET_HOUSE_CHOICE,
      payload: housePick,
    });

    const isWinner = evalGame(state.userChoice!, housePick);

    if (isWinner) {
      dispatch({
        type: GameActionType.SET_LAST_WINNER,
        payload: player.user,
      });
      setTimeout(() => {
        dispatch({
          type: GameActionType.SET_LOADING,
          payload: false,
        });
        dispatch({
          type: GameActionType.SET_SCORE,
          payload: state.score + 1,
        });
      }, 1500);
    } else {
      dispatch({
        type: GameActionType.SET_LAST_WINNER,
        payload: player.house,
      });
      setTimeout(() => {
        dispatch({
          type: GameActionType.SET_LOADING,
          payload: false,
        });
        dispatch({
          type: GameActionType.SET_SCORE,
          payload: state.score - 1,
        });
      }, 1500);
    }
  };

  const handlePlayAgain = () => {
    dispatch({
      type: GameActionType.SET_LOADING,
      payload: true,
    });
    dispatch({
      type: GameActionType.SET_LAST_WINNER,
      payload: null,
    });
    dispatch({
      type: GameActionType.SET_HOUSE_CHOICE,
      payload: null,
    });
    dispatch({
      type: GameActionType.SET_BATTLE,
      payload: { battle: false, userChoice: state.userChoice },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      startGame();
    }, 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      <div className=" mx-auto mt-20 flex justify-center items-center gap-5 md:gap-20 flex-wrap md:flex-nowrap">
        <div
          className={`flex flex-col justify-center items-center gap-12 order-1  ${
            state.lastWinner === player.user ? "z-30" : "z-40"
          }`}>
          <h2 className="uppercase relative tracking-widest text-white md:text-2xl order-2 md:order-1 z-40">
            You Picked
          </h2>
          <div className="md:h-[400px] h-24 order-1 md:order-2">
            <button
              aria-label={`button ${state.userChoice!}`}
              type="button"
              className={`${baseButtonStyle} ${styleSelector(
                state.userChoice!,
              )} ${
                !state.loading &&
                state.lastWinner === player.user &&
                "shadow-winnerRingMobile md:shadow-winnerRing"
              } `}>
              <div className="h-full w-full rounded-full shadow-md">
                <div
                  className="
          shadow-innerRing flex h-full w-full 
          items-center justify-center rounded-full bg-gray-200">
                  <Image
                    width={0}
                    height={0}
                    src={imageSelector(state.userChoice!)}
                    alt={`icon ${choices.rock}`}
                    className="w-1/2 select-none"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
        {!state.loading && (
          <motion.div
            key="result-view"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
            className="z-50 mx-auto flex basis-full flex-col items-center md:m-0 md:basis-auto md:order-2 order-3">
            <h2 className="uppercase text-6xl tracking-wide text-white">
              {state.lastWinner && state.lastWinner === player.user
                ? "You Win"
                : "You Lose"}
            </h2>
            <button
              onClick={() => handlePlayAgain()}
              className="uppercase mt-6 rounded-xl bg-white px-16 py-3 text-xl tracking-widest text-darkText duration-150 transition-colors hover:bg-transparent hover:text-white border-white border">
              Play Again
            </button>
          </motion.div>
        )}

        <div
          className={`flex flex-col justify-center items-center gap-12 order-2 md:order-3 ${
            state.lastWinner === player.house ? "z-30" : "z-40"
          }`}>
          <h2 className="uppercase relative tracking-widest text-white md:text-2xl order-2 md:order-1 z-40">
            The House Picked
          </h2>
          {state.lastWinner ? (
            <motion.div
              key="house-pick"
              initial={{ rotateY: 90 }}
              animate={{ rotateY: 0 }}
              transition={{
                delay: 0.5,
                duration: 1,
                type: "tween",
                ease: "easeInOut",
              }}
              className="md:h-[400px] h-24 order-1 md:order-2">
              <button
                aria-label={`button ${state.houseChoice!}`}
                type="button"
                className={`${baseButtonStyle} ${styleSelector(
                  state.houseChoice!,
                )} ${
                  !state.loading &&
                  state.lastWinner === player.house &&
                  "shadow-winnerRingMobile md:shadow-winnerRing "
                }`}>
                <div className="h-full w-full rounded-full shadow-md">
                  <div
                    className="
          shadow-innerRing flex h-full w-full 
          items-center justify-center rounded-full bg-gray-200">
                    <Image
                      width={0}
                      height={0}
                      src={imageSelector(state.houseChoice!)}
                      alt={`icon ${state.houseChoice!}`}
                      className="w-1/2 select-none"
                    />
                  </div>
                </div>
              </button>
            </motion.div>
          ) : (
            <div className="md:h-[400px] h-24 order-1 md:order-2 flex justify-center items-center md:items-start">
              <motion.div
                animate={{
                  scale: [0.6, 1.2, 0.6, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  type: "tween",
                  ease: "easeInOut",
                }}>
                <div className="md:h-[220px] md:w-[220px] flex w-24 h-24 rounded-full mt-5 bg-darkText/70 z-50"></div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default GameBattle;
