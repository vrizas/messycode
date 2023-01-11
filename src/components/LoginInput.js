import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'
import Form from './styled/Form'
import Button from './styled/Button'
import Title from './styled/Title'
import Wrapper from './styled/Wrapper'
import Input from './styled/Input'

function LoginInput ({ size, login, openRegisterModal, closeModal }) {
  const width = {
    base: '75%',
    small: '50%',
    medium: '80%',
    large: '90%',
    extraLarge: '95%'
  }

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
    <Form className="login-form" width={width[size]} onClick={(event) => event.stopPropagation()} onSubmit={(event) => loginHandler(event, { email: loginEmail, password: loginPassword })}>
        <Title>Login</Title>
        <Wrapper flexDirection="column" gap="0.5rem">
            <Input type="email" value={loginEmail} onChange={onLoginEmailChange} placeholder="Email" required />
            <Input type="password" value={loginPassword} onChange={onLoginPasswordChange} placeholder="Password" required />
            <Button type="submit" width="100%" margin="0.75rem 0 0 0">Login</Button>
            <p className="text-sm text-center mt-5">Don&apos;t have an account yet? <button className="text-primary font-medium" onClick={openRegisterModal}>Sign Up</button></p>
        </Wrapper>
    </Form>
  )
}

LoginInput.propTypes = {
  /** Size of announcement, it will change the size of the form  */
  size: PropTypes.oneOf(['base', 'small', 'medium', 'large', 'extraLarge']).isRequired,
  /** Action when the Login button is clicked */
  login: PropTypes.func.isRequired,
  /** Action when the Sign Up button is clicked */
  openRegisterModal: PropTypes.func.isRequired,
  /** Action of announcement, when user logged in */
  closeModal: PropTypes.func.isRequired
}

LoginInput.defaultProps = {
  size: 'base'
}

export default LoginInput
