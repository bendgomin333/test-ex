import { useSelector } from "react-redux"
import { NewsAddForm } from "../../features/news-add-form/ui"
import { NewsFilter } from "../../features/news-filter/ui"
import { NewsLine } from "../../features/newsline/ui"
import * as AuthSelectors from '../../features/auth/selectors'
import './style.scss'

const NewsPage = () => {
  const privilegies = useSelector(AuthSelectors.privilegies)

  return (
    <main className="news">
      <div className="container">
        <h1 className="news__header">Новости</h1>
        <NewsFilter />
        {privilegies ? <NewsAddForm /> : null}
        <NewsLine />
      </div>
    </main>
  )
}

export default NewsPage