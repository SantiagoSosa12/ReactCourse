import './App.css';
import { BrowserRouter as Router, Route, Routes, Link,  } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import DashBoard from './pages/dasboard/DashBoard';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/home/HomePage';

function AppRoutingFinal() {

  //TODO: Change to sesion storage
  let logged = true;

  return (
    <Router>
      <aside>
        <Link to='/'>| HOME |</Link>
        <Link to='/login'>| Login |</Link>
        <Link to='/dasboard'>| DashBoard |</Link>
        <Link to='/404'>| Not Found |</Link>
      </aside>
      <Routes>
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='/' element={<HomePage />} />
        {(() => {
          if (logged) {
            return <Route path='/dasboard' element={<DashBoard />}></Route>
          } 
        })()}
        <Route path='/login' element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
