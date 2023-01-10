import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { asyncGetLeaderboards, receiveLeaderboardsActionCreator } from './action'

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'users-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg'
    },
    score: 10
  },
  {
    user: {
      id: 'users-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg'
    },
    score: 5
  }
]

const fakeErrorResponse = new Error('Oops, something went wrong')

describe('asyncGetLeaderboards thunk', () => {
  beforeEach(() => {
    api._getAllLeaderboards = api.getAllLeaderboards
  })

  afterEach(() => {
    api.getAllLeaderboards = api._getAllLeaderboards

    delete api._getAllLeaderboards
  })

  it('should dispatch action correctly when data fetching success', async () => {
    api.getAllLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse)
    const dispatch = jest.fn()

    await asyncGetLeaderboards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getAllLeaderboards = () => Promise.reject(fakeErrorResponse)
    const dispatch = jest.fn()

    window.alert = jest.fn()

    await asyncGetLeaderboards()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
