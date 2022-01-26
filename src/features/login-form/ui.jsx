import { Popup } from './../popup/ui';
import './style.scss';
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../auth/model';
import { useEffect } from 'react';
import * as AuthSelectors from '../auth/selectors'

export const LoginForm = ({ visible, closePopup }) => {
  const dispatch = useDispatch()
  const isAuth = useSelector(AuthSelectors.isAuth)
  const loading = useSelector(AuthSelectors.loading)
  const error = useSelector(AuthSelectors.error)


  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
      dispatch(login({ username: values.username, password: values.password }))
    }
  })

  useEffect(() => {
    visible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
  }, [visible])

  useEffect(() => {
    if (!isAuth) return
    closePopup()
  }, [isAuth])

  return (
    visible ? <Popup>
      <div className='login__wrapper'>
        <div className='login__inner'>
          <div className='login__close-btn' onClick={() => closePopup()}>
          </div>
          <h2 className='login__title'>
            Авторизация
          </h2>
          <form className='login__form' onSubmit={formik.handleSubmit}>
            <label htmlFor="login__input-username">Имя пользователя</label>
            <input
              id='username'
              name='username'
              type="text"
              className='login__input-username'
              value={formik.values.username}
              onChange={formik.handleChange} />
            <label htmlFor="login__input-password">Пароль</label>
            <input
              id='password'
              name='password'
              type="password"
              className='login__input-password'
              value={formik.values.password}
              onChange={formik.handleChange} />
            <button type='submit' disabled={loading}>Вход</button>
            {error ? <span className='login__error-message'>Неверный логин или пароль</span> : null}
          </form>
        </div>
      </div>
    </Popup> : ''
  )
}