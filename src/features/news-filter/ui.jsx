import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setFilter } from '../newsline/model'
import * as NewsSelectors from '../newsline/selectors'
import './style.scss'

export const NewsFilter = () => {
    const filter = useSelector(NewsSelectors.filter)
    const dispatch = useDispatch()

    return (
        <div className='news__filter'>
            <input 
            className='news__filter-input' 
            value={filter} 
            onChange={e => dispatch(setFilter(e.target.value))}
            placeholder='Поиск по заголовку/тексту'>
            </input>
        </div>
    )
}