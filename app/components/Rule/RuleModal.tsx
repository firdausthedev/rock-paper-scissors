"use client";

import ruleSheet from "../../assets/images/image-rules-bonus.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import Image from "next/image";
import AppContext from "../context/context";
import { useContext } from "react";
import { GameActionType } from "../context/types";
import { motion, AnimatePresence } from "framer-motion";

const RuleModal = () => {
  const { state, dispatch } = useContext(AppContext);
  const closeModal = () => {
    dispatch({ type: GameActionType.SET_RULE_MODAL, payload: false });
  };

  return (
    <AnimatePresence>
      {state.ruleModalOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.3 } }}
          className="fixed z-50 left-0 right-0 top-0 bottom-0 h-full w-full bg-black/70 flex justify-center items-center">
          <motion.div
            key="modal-content"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
            className="bg-white flex flex-col rounded-xl w-full h-full md:w-fit md:h-auto md:p-11 
                    justify-center items-center md:items-start relative overflow-y-auto py-10 gap-10 ">
            <div className="flex w-full justify-center md:justify-between relative ">
              <h2 className="text-4xl font-bold text-darkText ">RULES</h2>
              <button
                type="button"
                aria-label="close button"
                className="hidden md:block"
                onClick={closeModal}>
                <Image width={0} height={0} src={closeIcon} alt="Close" />
              </button>
            </div>
            <Image width={0} height={0} src={ruleSheet} alt="Rules" />
            <button
              type="button"
              className="block md:hidden"
              onClick={closeModal}
              aria-label="close button">
              <Image width={0} height={0} src={closeIcon} alt="Close" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RuleModal;
