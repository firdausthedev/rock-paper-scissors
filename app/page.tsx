import GameView from "./components/Game/GameView";
import RuleButton from "./components/Rule/RuleButton";
import RuleModal from "./components/Rule/RuleModal";
import Scoreboard from "./components/Scoreboard";
import WinConfetti from "./components/WinConfetti";
import { AppProvider } from "./components/context/context";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradientBg relative flex flex-col overflow-hidden py-8 md:py-[2.9rem] px-8">
      <AppProvider>
        <Scoreboard />
        <GameView />
        <WinConfetti />
        <RuleButton />
        <RuleModal />
      </AppProvider>
    </main>
  );
}
