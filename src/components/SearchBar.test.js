/**
 * skenario testing
 *
 * - SearchBar component
 *   - should handle tag/keyword typing correctly
 *   - should call search function when user is typing
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import SearchBar from './SearchBar'

describe('SearchBar component', () => {
  it('should handle tag/keyword typing correctly', async () => {
    render(<SearchBar search={() => {}} />)
    const searchInput = await screen.getByPlaceholderText('Search by tag or keyword')

    await userEvent.type(searchInput, 'general')

    expect(searchInput).toHaveValue('general')
  })

  it('should call search function when user is typing', async () => {
    const mockSearch = jest.fn()
    render(<SearchBar search={mockSearch} />)
    const searchInput = await screen.getByPlaceholderText('Search by tag or keyword')

    await userEvent.type(searchInput, 'general')

    expect(mockSearch).toBeCalledWith('general')
  })
})
