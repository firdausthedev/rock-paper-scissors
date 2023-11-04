import RuleButton from "./components/Rule/RuleButton";
import RuleModal from "./components/Rule/RuleModal";
import Scoreboard from "./components/Scoreboard";
import { AppProvider } from "./components/context/context";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradientBg relative flex flex-col">
      <AppProvider>
        <Scoreboard />
        <RuleButton />
        <RuleModal />
      </AppProvider>
    </main>
  );
}
