import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNews } from '../newsline/model'
import './style.scss'

export const NewsAddForm = () => {
    const [visible, setVisibility] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const btnRef = useRef()

    useEffect(() => {
        if (!title || !text) setDisabled(true)
        else setDisabled(false)
    }, [title, text])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNews({ title, text, datetime: new Date().toString() }))
        setTitle('')
        setText('')
        setVisibility(false)
        btnRef.current.style.boxShadow = "0 0 4px rgb(45, 184, 40)"
        setTimeout(() => {
            btnRef.current.style.boxShadow = '0 0 4px rgb(175, 174, 174)'
        }, 1700)
    }

    return (
        <div className="news__add">
            <div className='news__add-btn' onClick={() => setVisibility(!visible)} ref={btnRef}>
                Добавить новость
            </div>
            <form className='news__add-form' style={{ height: visible ? '200px' : 0 }} onSubmit={handleSubmit}>
                <label htmlFor="news__add-input">Заголовок</label>
                <input
                    className='news__add-input'
                    id='news__add-input'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="news__add-textarea">Текст новости</label>
                <textarea
                    className='news__add-textarea'
                    id='news__add-textarea'
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button className='news__add-submit' type='submit' disabled={disabled}>Отправить</button>
            </form>
        </div>
    )
}