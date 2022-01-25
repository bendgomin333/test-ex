import { lazy } from "react";
import { Routes, Route } from 'react-router-dom';
import { Header } from "../features/header/ui";

const MainPage = lazy(() => import('./main/ui'))
const NewsPage = lazy(() => import('./news/ui'))

export const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/news' element={<NewsPage />} />
      </Routes>
    </>
  )
}