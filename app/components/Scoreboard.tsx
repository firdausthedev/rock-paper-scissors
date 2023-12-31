"use client";

import Image from "next/image";
import Logo from "../assets/images/logo-bonus.svg";
import { useContext } from "react";
import AppContext from "./context/context";

const Scoreboard = () => {
  const { state } = useContext(AppContext);
  return (
    <section className=" z-50">
      <header
        className="mx-auto max-w-[701px] flex items-center justify-between rounded-lg md:rounded-[1rem] border-2
          border-headerOutline p-3 pl-4 md:px-6 md:pb-[0.8rem] md:pt-[0.9rem]">
        <Image
          width={0}
          height={0}
          alt="logo"
          src={Logo}
          className="h-[57px] w-[57px] md:h-[117px] md:w-[117px] pl-1 pt-1"
        />
        <div
          className="flex w-fit px-5 h-[4.5rem] flex-col items-center justify-center rounded-lg bg-white py-3 
              md:h-[113px] md:min-w-[150px]">
          <p className="text-sm tracking-widest text-scoreText md:text-base">
            SCORE
          </p>
          <p className="text-2xl font-bold tracking-widest text-darkText md:text-6xl">
            {state.score}
          </p>
        </div>
      </header>
    </section>
  );
};

export default Scoreboard;
