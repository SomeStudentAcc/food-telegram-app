import { useEffect } from "react"

const tg = window.Telegram.WebApp
function App() {
  
  useEffect(()=>{
    tg.ready()
  }, [])


  return (
    <>
     <div>hello</div>
    </>
  )
}

export default App
