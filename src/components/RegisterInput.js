import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

function RegisterInput ({ registerHandler, openLoginModal }) {
  const [registerName, onRegisterNameChange, setRegisterName] = useInput('')
  const [registerEmail, onRegisterEmailChange, setRegisterEmail] = useInput('')
  const [registerPassword, onRegisterPasswordChange, setRegisterPassword] = useInput('')

  return (
    <form className="bg-white px-5 py-4 lg:px-8 lg:py-7 rounded-lg w-3/4 md:w-1/2 lg:w-1/3" onClick={(event) => event.stopPropagation()} onSubmit={(event) => registerHandler(event, { name: registerName, email: registerEmail, password: registerPassword })}>
        <h2 className="font-medium text-primary text-lg mb-5">Register</h2>
        <div className="flex flex-col gap-2">
            <input type="name" value={registerName} onChange={onRegisterNameChange} placeholder="Name" className="px-3 py-2 border rounded-md" required />
            <input type="email" value={registerEmail} onChange={onRegisterEmailChange} placeholder="Email" className="px-3 py-2 border rounded-md" required />
            <input type="password" value={registerPassword} onChange={onRegisterPasswordChange} placeholder="Password" className="px-3 py-2 border rounded-md" required />
            <button type="submit" className="bg-primary text-white py-2 px-5 font-medium rounded-md mt-3">Register</button>
            <p className="text-sm text-center mt-5">Already have an account? <button className="text-[#38AC83]" onClick={openLoginModal}>Login</button></p>
        </div>
    </form>
  )
}

RegisterInput.propTypes = {
  registerHandler: PropTypes.func.isRequired,
  openLoginModal: PropTypes.func.isRequired
}

export default RegisterInput
