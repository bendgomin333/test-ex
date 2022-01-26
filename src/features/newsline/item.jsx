import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { acceptNewsById, deleteNewsById, SelectNewsById } from "./model"
import * as NewsSelectors from './selectors'
import * as AuthSelectors from '../auth/selectors'

import "./style.scss"
import { useDispatch } from "react-redux"

export const NewsItem = ({ id }) => {
    const item = useSelector(state => SelectNewsById(state, id))
    const filter = useSelector(NewsSelectors.filter)
    const [isShow, setShow] = useState(true)
    const privilegies = useSelector(AuthSelectors.privilegies)
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const dispatch = useDispatch()

    const handleAccept = useCallback(() => {
        dispatch(acceptNewsById(id))
    }, [dispatch, id])

    const handleDelete = useCallback(() => {
        dispatch(deleteNewsById(id))
    }, [dispatch, id])

    useEffect(() => {
        const datetime = new Date(Date.parse(item.datetime))
        setTime(datetime.toLocaleTimeString())
        setDate(datetime.toLocaleDateString())
    }, [])

    useEffect(() => {
        if (!item.moderated && privilegies < 2) {
            setShow(false)
            return
        }
        if (!filter) {
            setShow(true)
            return
        }
        if (item.title.toLowerCase().includes(filter.toLowerCase()) || item.text.toLowerCase().includes(filter.toLowerCase())) {
            setShow(true)
        } else setShow(false)
    }, [filter, privilegies])


    return (
        isShow ?
            <div className="news__item">
                <h3 className="news__title">{item.title}</h3>
                <p className="news__text">{item.text}</p>
                <div className="news__control">
                    <div className="news__datetime">{`${date}  ${time}`}</div>
                    {privilegies > 1 ? <div className="news__moderate">
                        {!item.moderated ? <>
                            <span onClick={handleAccept}>
                                Одобрить
                            </span>{' / '}</>
                            : null}
                        <span onClick={handleDelete}>
                            Удалить
                        </span>
                    </div> : null}

                </div>
            </div> : null
    )
}