import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// 새로고침 시 브라우저의 스크롤 위치 자동복원을 끈다.
// (맨 밑에서 커튼을 닫고 새로고침해도 커튼이 열릴 땐 항상 맨 위에서 시작)
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
