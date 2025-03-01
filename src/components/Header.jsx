import React from 'react'
import Button from './Button';
import useTelegram from '../hooks/UseTelegram';

export default function Header() {
    const {onClose, user}= useTelegram()

  return (
    <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
               {user}
            </span>
        </div>
  )
}
