/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when Login button is clicked
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import LoginInput from './LoginInput'

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    render(<LoginInput login={() => {}} openRegisterModal={() => {}} closeModal={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')

    await userEvent.type(emailInput, 'bambang@gmail.com')

    expect(emailInput).toHaveValue('bambang@gmail.com')
  })

  it('should handle password typing correctly', async () => {
    render(<LoginInput login={() => {}} openRegisterModal={() => {}} closeModal={() => {}} />)
    const passwordInput = await screen.getByPlaceholderText('Password')

    await userEvent.type(passwordInput, 'password123')

    expect(passwordInput).toHaveValue('password123')
  })

  it('should call login function when Login button is clicked', async () => {
    const mockLogin = jest.fn()
    render(<LoginInput login={mockLogin} openRegisterModal={() => {}} closeModal={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'bambang@gmail.com')
    const passwordInput = await screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'password123')
    const loginButton = await screen.getByRole('button', { name: 'Login' })

    await userEvent.click(loginButton)

    expect(mockLogin).toBeCalledWith({
      email: 'bambang@gmail.com',
      password: 'password123'
    })
  })
})
