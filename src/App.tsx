import './App.scss'
import { lazy, Suspense, useEffect } from 'react';
import ROUTES from './constants/pagesRoutes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';
import { useAppDispatch } from './redux/hooks';
import { fetchUser } from './redux/slices/userSlice/thunks/fetchUser';
import Loading from './pages/Loading/Loading';
import { useAppSelector } from './redux/hooks';
import { setLoading } from './redux/slices/loadingSlice/loadingSlice';
import { getDoc, doc } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';

const LogIn = lazy(() => import('./pages/LogIn/LogIn'))
const NotFound = lazy(() => import('./pages/Not-Found/Not-Found'))
const SignUp = lazy(() => import('./pages/SignUp/SignUp'))
const Home = lazy(() => import('./pages/Home/Home'))
const GamePage = lazy(() => import('./pages/Game/GamePage'))
const Profile = lazy(() => import('./pages/Profile/Profile')) 


const App: React.FC = () => {

  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.loading.loading)

  useEffect(() => {

    dispatch(setLoading(true))

    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const docUser = doc(db, 'users', currentUser.uid)
        const getUser = await getDoc(docUser)
        if(getUser.data()) {
          dispatch(await fetchUser(currentUser.uid))
        } 
      }
      dispatch(setLoading(false))
    })
  }, [dispatch])


  return (
    <>
      {
        isLoading ? <Loading /> :
          (
            <Suspense fallback={<Loading />}>
              <Router>
                <Routes>
                  <Route path={ROUTES.HOME} element={<Home />} />
                  <Route path={ROUTES.PROFILE} element = {<Profile />} />
                  <Route path={ROUTES.LOG_IN} element={<LogIn />} />
                  <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
                  <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
                  <Route path={ROUTES.GAME} element={<GamePage />} />
                </Routes>
              </Router>
            </Suspense>
          )
      }
    </>
  );
}

export default App;
