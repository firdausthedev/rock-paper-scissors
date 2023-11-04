"use client";

import { AnimatePresence, motion } from "framer-motion";
import AppContext from "../context/context";
import GameBattle from "./GameBattle";
import GameButtonView from "./GameButtonView";
import { useContext } from "react";

const GameView = () => {
  const { state } = useContext(AppContext);

  return (
    <div>
      <AnimatePresence>
        {!state.battle && (
          <motion.div
            key="button-view"
            initial={{ y: "100vh" }}
            animate={{ y: 0, transition: { delay: 0.3 } }}
            exit={{ scale: 1.2, opacity: 0.5 }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeInOut",
            }}>
            <GameButtonView />
          </motion.div>
        )}
        {state.battle && (
          <motion.div
            key="battle-view"
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3, duration: 0.5 },
            }}
            transition={{
              type: "tween",
              ease: "easeInOut",
            }}>
            <GameBattle />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GameView;
