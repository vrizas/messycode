import React, { useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPreloadProcess } from './states/isPreload/action'
import { asyncSetAuthUser, asyncUnsetAuthUser } from './states/authUser/action'
import HomePage from './pages/HomePage'
import Navigation from './components/Navigation'
import Loading from './components/Loading'
import DetailPage from './pages/DetailPage'
import { asyncRegisterUser } from './states/users/action'
import CreateThreadPage from './pages/CreateThreadPage'
import LeaderboardsPage from './pages/LeaderboardsPage'

function App () {
  const {
    authUser = null,
    isPreload = false
  } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
  }

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }))
  }

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser())
  }

  if (isPreload) {
    return null
  }

  return (
    <>
      <Loading />
      <div>
        <header className="sticky top-0 z-30 py-3 px-4 bg-white shadow-main flex justify-between items-center lg:px-12">
            <h1 className="text-primary font-bold text-xl"><Link to="/">Messy Code</Link></h1>
            <Navigation authUser={authUser} login={onLogin} register={onRegister} signOut={onSignOut} />
        </header>
        <main className="py-5 px-4 lg:py-0 lg:px-16 lg:mx-auto">
            <div className="lg:min-h-[calc(100vh-64px)] lg:bg-white lg:py-5 lg:px-8">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/threads/:id" element={<DetailPage />} />
                    <Route path="/thread/create" element={<CreateThreadPage />} />
                    <Route path="/leaderboards" element={<LeaderboardsPage />} />
                </Routes>
            </div>
        </main>
      </div>
    </>
  )
}

export default App
