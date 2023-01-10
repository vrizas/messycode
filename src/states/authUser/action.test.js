import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { asyncSetAuthUser, setAuthUserActionCreator } from './action'

const fakeTokenResponse = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRpbWFzMiIsIm5hbWUiOiJEaW1hcyBTYXB1dHJhIiwicGhvdG8iOiJodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8_bmFtZT1EaW1hcyBTYXB1dHJhJmJhY2tncm91bmQ9cmFuZG9tIiwiaXNfcGVybWFuZW50IjpmYWxzZSwiaWF0IjoxNjYzODQwNzY0fQ._HrzpinFYX_m9WfvM-lGCdVrnhnaGHhzt1e6eATE1Iw'

const fakeAuthUserResponse = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg'
}

const fakeErrorResponse = new Error('email or password is wrong')

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    api._login = api.login
    api._getOwnProfile = api.getOwnProfile
  })

  afterEach(() => {
    api.login = api._login
    api.getOwnProfile = api._getOwnProfile

    delete api._login
    delete api._getOwnProfile
  })

  it('should dispatch action correctly when data fetching success', async () => {
    api.login = () => Promise.resolve(fakeTokenResponse)
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse)
    const dispatch = jest.fn()

    await asyncSetAuthUser({
      email: fakeAuthUserResponse.email,
      password: 'password123'
    })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.login = () => Promise.reject(fakeErrorResponse)
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse)
    const dispatch = jest.fn()

    window.alert = jest.fn()

    await asyncSetAuthUser({
      email: fakeAuthUserResponse.email,
      password: 'passwordsaja'
    })(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})
