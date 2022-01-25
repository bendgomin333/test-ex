import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const withRouter = (Component) => () => {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Component />
      </Suspense>
    </BrowserRouter>
  )
}