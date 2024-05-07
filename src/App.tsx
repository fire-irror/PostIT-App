import {Route, Routes} from 'react-router-dom'
import SelectPostItPage from './pages/SelectPostItPage'
import SplashScreenPage from './pages/SplashScreenPage'
import StartPage from './pages/StartPage'
import WritePostPage from './pages/WritePostPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={< SplashScreenPage/>} />
      <Route path="/start" element={< StartPage/>} />
      <Route path="/select" element={< SelectPostItPage/>} />
      <Route path="/write" element={< WritePostPage/>} />
    </Routes>
  )
}

export default App
