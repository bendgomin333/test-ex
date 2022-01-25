import ReactDOM from 'react-dom'

export const Popup = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('popup')
  )
}