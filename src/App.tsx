import {Route, Routes} from 'react-router-dom'
import SplashScreenPage from './pages/SplashScreenPage'
import StartPage from './pages/StartPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={< SplashScreenPage/>} />
      <Route path="/start" element={< StartPage/>} />
    </Routes>
  )
}

export default App
