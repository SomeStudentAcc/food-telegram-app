import { useEffect } from "react"
import useTelegram from "./hooks/UseTelegram"

function App() {
  const {onToggleButton, tg} = useTelegram()
  
  useEffect(()=>{
    tg.ready()
  }, [])


  return (
    <>
    <button onClick={onToggleButton}>toggle</button>
    </>
  )
}

export default App
