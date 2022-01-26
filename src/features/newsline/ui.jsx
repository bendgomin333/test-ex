import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { NewsItem } from "./item"
import { SelectNewsIds, setNews } from "./model"

export const NewsLine = () => {
    const dispatch = useDispatch()
    const ids = useSelector(SelectNewsIds)

    useEffect(() => {
        dispatch(setNews())
    }, [])

    return (
        <div className="news__line">
            {ids.map(id => <NewsItem id={id} key={id} />)}
        </div>
    )
}
