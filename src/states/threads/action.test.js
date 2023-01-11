/**
 * skenario test
 *
 * - asyncCreateThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { asyncCreateThread, createThreadActionCreator } from './action'

const fakeThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0
}

const fakeErrorResponse = new Error('Title should not be empty')

describe('asyncCreateThread thunk', () => {
  beforeEach(() => {
    api._createThread = api.createThread
  })

  afterEach(() => {
    api.createThread = api._createThread

    delete api._createThread
  })

  it('should dispatch action correctly when data fetching success', async () => {
    api.createThread = () => Promise.resolve(fakeThreadResponse)
    const dispatch = jest.fn()

    window.alert = jest.fn()

    await asyncCreateThread({
      title: fakeThreadResponse.title,
      body: fakeThreadResponse.body,
      category: fakeThreadResponse.category
    })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(createThreadActionCreator(fakeThreadResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toBeCalled()
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.createThread = () => Promise.reject(fakeErrorResponse)
    const dispatch = jest.fn()

    window.alert = jest.fn()

    await asyncCreateThread({
      title: '',
      body: fakeThreadResponse.body,
      category: fakeThreadResponse.category
    })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
