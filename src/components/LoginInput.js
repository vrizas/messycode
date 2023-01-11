import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

function LoginInput ({ login, openRegisterModal, closeModal }) {
  const [loginEmail, onLoginEmailChange, setLoginEmail] = useInput('')
  const [loginPassword, onLoginPasswordChange, setLoginPassword] = useInput('')

  const loginHandler = (event, { email, password }) => {
    event.preventDefault()
    login({ email, password })
    setLoginEmail('')
    setLoginPassword('')
    closeModal()
  }

  return (
    <form className="login-form bg-white px-5 py-4 lg:px-8 lg:py-7 rounded-lg w-3/4 md:w-1/2 lg:w-1/3" onClick={(event) => event.stopPropagation()} onSubmit={(event) => loginHandler(event, { email: loginEmail, password: loginPassword })}>
        <h2 className="font-medium text-primary text-lg mb-5">Login</h2>
        <div className="flex flex-col gap-2">
            <input type="email" value={loginEmail} onChange={onLoginEmailChange} placeholder="Email" className="px-3 py-2 border rounded-md" required />
            <input type="password" value={loginPassword} onChange={onLoginPasswordChange} placeholder="Password" className="px-3 py-2 border rounded-md" required />
            <button type="submit" className="bg-primary text-white py-2 px-5 font-medium rounded-md mt-3">Login</button>
            <p className="text-sm text-center mt-5">Don&apos;t have an account yet? <button className="text-[#38AC83]" onClick={openRegisterModal}>Sign Up</button></p>
        </div>
    </form>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
  openRegisterModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default LoginInput
