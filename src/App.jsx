import { useEffect } from "react"

const tg = window.Telegram.WebApp
function App() {

  useEffect(()=>{
    tg.ready()
  }, [])
  const onClose = ()=>{
    tg.close()
  }

  return (
    <>
     <div>hello</div>
     <button onClick={onClose}>Close</button>
    </>
  )
}

export default App
