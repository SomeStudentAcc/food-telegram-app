import { useEffect } from "react";
import useTelegram from "./hooks/UseTelegram";
import Header from "./components/Header";

function App() {
  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
    <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </>
  );
}

export default App;
