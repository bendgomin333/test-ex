import { useSelector } from 'react-redux'
import './style.scss'
import * as AuthSelectors from '../../features/auth/selectors'
import { Popup } from './../../features/popup/ui';
import { generateNews } from './../../features/newsline/model';

const MainPage = () => {
  const username = useSelector(AuthSelectors.username)
  generateNews()

  return (
    <main className='main'>
      <div className="container">
        <h1 className="greeting">Привет, {username || 'Гость'}</h1>
      </div>
    </main>
  )
}

export default MainPage