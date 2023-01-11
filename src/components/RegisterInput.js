import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import Form from './styled/Form'
import Button from './styled/Button'
import Title from './styled/Title'
import Wrapper from './styled/Wrapper'
import Input from './styled/Input'

function RegisterInput ({ register, openLoginModal, closeModal }) {
  const [registerName, onRegisterNameChange, setRegisterName] = useInput('')
  const [registerEmail, onRegisterEmailChange, setRegisterEmail] = useInput('')
  const [registerPassword, onRegisterPasswordChange, setRegisterPassword] = useInput('')

  const registerHandler = (event, { name, email, password }) => {
    event.preventDefault()
    register({ name, email, password })
    setRegisterName('')
    setRegisterEmail('')
    setRegisterPassword('')
    closeModal()
  }

  return (
    <Form className="register-form" onClick={(event) => event.stopPropagation()} onSubmit={(event) => registerHandler(event, { name: registerName, email: registerEmail, password: registerPassword })}>
        <Title>Register</Title>
        <Wrapper flexDirection="column" gap="0.5rem">
            <Input type="name" value={registerName} onChange={onRegisterNameChange} placeholder="Name" required />
            <Input type="email" value={registerEmail} onChange={onRegisterEmailChange} placeholder="Email" required />
            <Input type="password" value={registerPassword} onChange={onRegisterPasswordChange} placeholder="Password" required />
            <Button type="submit" width="100%" margin="0.75 0 0 0">Register</Button>
            <p className="text-sm text-center mt-5 ">Already have an account? <button className="text-primary font-medium" onClick={openLoginModal}>Login</button></p>
        </Wrapper>
    </Form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
  openLoginModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default RegisterInput
