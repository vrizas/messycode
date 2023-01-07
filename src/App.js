import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import Loading from './components/Loading';
// import HomePage from './pages/HomePage';
// import Navigation from './components/Navigation';
// import RegisterPage from './pages/RegisterPage';
// import DetailPage from './pages/DetailPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import Loading from './components/Loading';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Loading />
      <div>
        <header className="sticky top-0 z-50 py-3 px-4 bg-white shadow-main flex justify-between items-center lg:px-12">
            <h1 className="text-primary font-bold text-xl">Messy Code</h1>
            <Navigation authUser={authUser} />
        </header>
        <main className="py-5 px-4 lg:py-0 lg:px-16 lg:mx-auto">
            <div className="lg:bg-white lg:py-5 lg:px-4">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/threads/:id" element={<DetailPage />} /> */}
                </Routes>
            </div>
        </main>
      </div>
    </>
  );
}

export default App;
