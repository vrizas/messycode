/**
 * skenario testing
 *
 * - ThreadCommentInput component
 *   - should handle comment typing correctly
 *   - should call comment function when Send button is clicked
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import ThreadCommentInput from './ThreadCommentInput'

describe('ThreadCommentInput component', () => {
  it('should handle comment typing correctly', async () => {
    // Arrange
    render(<ThreadCommentInput comment={() => {}} authUser={{}} />)
    const commentInput = await screen.getByPlaceholderText('Comment')

    // Action
    await userEvent.type(commentInput, 'mantapp')

    // Assert
    expect(commentInput).toHaveTextContent('mantapp')
  })

  it('should call comment function when Send button is clicked', async () => {
    // Arrange
    const mockComment = jest.fn()
    render(<ThreadCommentInput comment={mockComment} authUser={{}} />)
    const commentInput = await screen.getByPlaceholderText('Comment')
    await userEvent.type(commentInput, 'mantapp')
    const createButton = await screen.getByText('Send')

    // Action
    await userEvent.click(createButton)

    // Assert
    expect(mockComment).toBeCalledWith('mantapp')
  })
})
