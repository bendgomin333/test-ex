import { useSelector } from 'react-redux'
import './style.scss'
import * as AuthSelectors from '../../features/auth/selectors'

const MainPage = () => {
  const username = useSelector(AuthSelectors.username)

  return (
    <main className='main'>
      <div className="container">
        <h1 className="greeting">Привет, {username || 'Гость'}</h1>
      </div>
    </main>
  )
}

export default MainPage