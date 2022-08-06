import './App.scss'
import { lazy, Suspense } from 'react';
import ROUTES from './constants/pagesRoutes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const LogIn = lazy(() => import('./pages/LogIn/LogIn'))
const NotFound = lazy(() => import('./pages/Not-Found/Not-Found'))
const SignUp = lazy(() => import('./pages/SignUp/SignUp'))
const Home = lazy(() => import('./pages/Home/Home'))


const App: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOG_IN} element={<LogIn />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
