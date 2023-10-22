import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useParams, } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AbouthPage from './pages/about-faqs/abouthPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  const params = useParams();
  let logged = false;

  let taskList = [{
    id: 1,
    name: 'Task 1',
    description: 'My Fisrt Task'
  }, {
    id: 2,
    name: 'Task 2',
    description: 'My Fisrt Task 2'
  }]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/login'>| Login |</Link>
          <Link to='/abouth'>| ABOUTH |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/404'>| Not Found |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
        </aside>
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/online-state' element={<StatePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/abouth' element={<AbouthPage />} />
            <Route path='/faqs' element={<AbouthPage />} />
            {/* <Route path='/profile'
              element={logged === true ? 
              <ProfilePage /> : 
              () => {
                console.log('Not logged');
                //alert('You must be logged'); doesnt work!!!
                return (<Navigate to="/login" />);
              }
              }>
            </Route> */}
            {(() => {
              if (logged) {
                return <Route path='/profile' element={<ProfilePage />}></Route>
              } else {
                return <Route path='/login' element={<LoginPage />}></Route>
              }
            })()}
            <Route path='/tasks' element={<TasksPage />} />
            <Route path="task/:taskID" 
            element={<TaskDetailPage />} />
            
            {/* 404 Not Found Page */}
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

    </Router>
  );
}

export default AppRoutingOne;
