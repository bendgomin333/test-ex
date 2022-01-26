import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { LoginForm } from '../login-form/ui'
import { logout } from './model'
import * as AuthSelectors from './selectors'
import "./style.scss"

export const Auth = () => {
  const isAuth = useSelector(AuthSelectors.isAuth)
  const dispatch = useDispatch()
  const [isVisible, setVisibility] = useState(false)

  const handleClick = (event) => {
    isAuth ? dispatch(logout()) : setVisibility(true)
  }

  return (
    <>
      <span className='auth-btn' onClick={handleClick}>
        {isAuth ? 'Выход' : 'Вход'}
      </span>
      <LoginForm visible={isVisible} closePopup={() => setVisibility(false)} />
    </>
  )
}