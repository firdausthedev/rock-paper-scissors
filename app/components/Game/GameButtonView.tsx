import GameButton from "./GameButton";
import { choices } from "../context/types";

const GameButtonView = () => {
  return (
    <div
      className="bg-pentangonBg bg-contain bg-center bg-no-repeat relative mx-auto mt-32 h-52 max-w-[264px] 
    md:h-80 md:max-w-[360px] mb-20">
      <GameButton type={choices.rock} />
      <GameButton type={choices.paper} />
      <GameButton type={choices.scissors} />
      <GameButton type={choices.lizard} />
      <GameButton type={choices.spock} />
    </div>
  );
};

export default GameButtonView;
