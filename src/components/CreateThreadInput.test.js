/**
 * skenario testing
 *
 * - CreateThreadInput component
 *   - should handle title typing correctly
 *   - should handle body typing correctly
 *   - should handle category typing correctly
 *   - should call createThread function when Create button is clicked
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import CreateThreadInput from './CreateThreadInput'

describe('CreateThreadInput component', () => {
  it('should handle title typing correctly', async () => {
    // Arrange
    render(<CreateThreadInput createThread={() => {}} />)
    const titleInput = await screen.getByPlaceholderText('Title')

    // Action
    await userEvent.type(titleInput, 'React Native')

    // Assert
    expect(titleInput).toHaveValue('React Native')
  })

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<CreateThreadInput createThread={() => {}} />)
    const bodyInput = await screen.getByPlaceholderText('Body')

    // Action
    await userEvent.type(bodyInput, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')

    // Assert
    expect(bodyInput).toHaveTextContent('Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
  })

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<CreateThreadInput createThread={() => {}} />)
    const categoryInput = await screen.getByPlaceholderText('Category')

    // Action
    await userEvent.type(categoryInput, 'react-native')

    // Assert
    expect(categoryInput).toHaveValue('react-native')
  })

  it('should call createThread function when Create button is clicked', async () => {
    // Arrange
    const mockCreateThread = jest.fn()
    render(<CreateThreadInput createThread={mockCreateThread} />)
    const titleInput = await screen.getByPlaceholderText('Title')
    await userEvent.type(titleInput, 'React Native')
    const bodyInput = await screen.getByPlaceholderText('Body')
    await userEvent.type(bodyInput, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
    const categoryInput = await screen.getByPlaceholderText('Category')
    await userEvent.type(categoryInput, 'react-native')
    const createButton = await screen.getByText('Create')

    // Action
    await userEvent.click(createButton)

    // Assert
    expect(mockCreateThread).toBeCalledWith({
      title: 'React Native',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      category: 'react-native'
    })
  })
})
