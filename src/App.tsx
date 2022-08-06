import './App.scss'
import ROUTES from './constants/pagesRoutes'
import LogIn from './pages/LogIn/LogIn';
import NotFound from './pages/Not-Found/Not-Found';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOG_IN} element={<LogIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
