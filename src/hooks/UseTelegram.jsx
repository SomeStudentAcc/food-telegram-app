import React from 'react'

export default function useTelegram() {
    const tg = window.Telegram.WebApp
    const onClose = ()=>{
      tg.close()
    }
    const onToggleButton = ()=>{
      if(tg.MainButton.isVisiable){
        tg.MainButton.hide()
      }
      else{
        tg.MainButton.show()
      }
    }
  return {
    tg,
    onClose,
    user: tg.initDataUnsafe?.user?.username
  }
}
