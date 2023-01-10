import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import { BsPlusCircleFill } from 'react-icons/bs'
import { MdLeaderboard } from 'react-icons/md'
import { Link } from 'react-router-dom'
import LoginInput from './LoginInput'
import RegisterInput from './RegisterInput'

function Navigation ({ authUser, login, register, signOut }) {
  const loginModalRef = useRef()
  const registerModalRef = useRef()

  const openLoginModal = () => {
    loginModalRef.current.classList.remove('hidden')
    registerModalRef.current.classList.add('hidden')
  }

  const openRegisterModal = () => {
    loginModalRef.current.classList.add('hidden')
    registerModalRef.current.classList.remove('hidden')
  }

  const closeModal = () => {
    loginModalRef.current.classList.add('hidden')
    registerModalRef.current.classList.add('hidden')
  }

  const loginHandler = (event, { email, password }) => {
    event.preventDefault()
    login({ email, password })
    setLoginEmail('')
    setLoginPassword('')
    closeModal()
  }

  const registerHandler = (event, { name, email, password }) => {
    event.preventDefault()
    register({ name, email, password })
    setRegisterName('')
    setRegisterEmail('')
    setRegisterPassword('')
    closeModal()
  }

  if (authUser) {
    return (
            <div className="flex items-center gap-3 md:gap-5">
                <Link to="/leaderboards" className="text-[#38AC83] flex items-center gap-2">
                    <MdLeaderboard className="text-2xl" />
                    <span className="hidden md:inline">Leaderboards</span>
                </Link>
                <Link to="/thread/create" className="text-[#38AC83] flex items-center gap-2">
                    <BsPlusCircleFill className="text-2xl" />
                    <span className="hidden md:inline">Create New Thread</span>
                </Link>
                <button className="bg-danger text-white py-2 px-5 rounded-md font-medium text-sm" onClick={signOut}>Logout</button>
            </div>
    )
  }

  return (
        <div>
            <div className="flex items-center gap-3 md:gap-5">
                <Link to="/leaderboards" className="text-[#38AC83] flex items-center gap-2">
                    <MdLeaderboard className="text-2xl" />
                    <span className="hidden md:inline">Leaderboards</span>
                </Link>
                <button className="bg-primary text-white py-2 px-5 rounded-md font-medium" onClick={openLoginModal}>Login</button>
            </div>
            <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-[rgba(0,0,0,.5)] flex items-center justify-center hidden" onClick={closeModal} ref={loginModalRef}>
                <LoginInput loginHandler={loginHandler} openRegisterModal={openRegisterModal} />
            </div>
            <div className="fixed top-0 left-0 z-40 w-screen h-screen bg-[rgba(0,0,0,.5)] flex items-center justify-center hidden" onClick={closeModal} ref={registerModalRef}>
                <RegisterInput registerHandler={registerHandler} openLoginModal={openLoginModal} />
            </div>
        </div>
  )
}

Navigation.propTypes = {
  authUser: PropTypes.object,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
}

export default Navigation
