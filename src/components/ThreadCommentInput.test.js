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
    render(<ThreadCommentInput comment={() => {}} authUser={{}} />)
    const commentInput = await screen.getByPlaceholderText('Comment')

    await userEvent.type(commentInput, 'mantapp')

    expect(commentInput).toHaveTextContent('mantapp')
  })

  it('should call comment function when Send button is clicked', async () => {
    const mockComment = jest.fn()
    render(<ThreadCommentInput comment={mockComment} authUser={{}} />)
    const commentInput = await screen.getByPlaceholderText('Comment')
    await userEvent.type(commentInput, 'mantapp')
    const createButton = await screen.getByText('Send')

    await userEvent.click(createButton)

    expect(mockComment).toBeCalledWith('mantapp')
  })
})
