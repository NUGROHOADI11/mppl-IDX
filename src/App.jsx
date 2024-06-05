import Landing from './pages/Landing'
import Menu from './pages/Menu'
import Detail from './pages/Detail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/menu" Component={Menu} />
          <Route path="/detail" Component={Detail} />
          <Route path="/" Component={Landing} />
        </Routes>
      </Router>
    </>
  )
}

export default App
