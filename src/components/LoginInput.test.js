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
    // Arrange
    render(<LoginInput loginHandler={() => {}} openRegisterModal={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')

    // Action
    await userEvent.type(emailInput, 'bambang@gmail.com')

    // Assert
    expect(emailInput).toHaveValue('bambang@gmail.com')
  })

  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput loginHandler={() => {}} openRegisterModal={() => {}} />)
    const passwordInput = await screen.getByPlaceholderText('Password')

    // Action
    await userEvent.type(passwordInput, 'password123')

    // Assert
    expect(passwordInput).toHaveValue('password123')
  })

  it('should call login function when Login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn()
    render(<LoginInput loginHandler={mockLogin} openRegisterModal={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'bambang@gmail.com')
    const passwordInput = await screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'password123')
    const loginButton = await screen.getByRole('button', { name: 'Login' })

    // Action
    await userEvent.click(loginButton)

    // Assert
    expect(mockLogin.mock.calls[0][1]).toEqual({
      email: 'bambang@gmail.com',
      password: 'password123'
    })
  })
})
