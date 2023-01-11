/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the detail thread when given by RECEIVE_THREAD_DETAIL action
 *  - should return the detail thread with the up voted thread when given by UP_VOTE_THREAD_DETAIL action
 *  - should return the detail thread with the down voted thread when given by DOWN_VOTE_THREAD_DETAIL action
 *
 */

import threadDetailReducer from './reducer'

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = null
    const action = { type: 'UNKNOWN' }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the detail thread when given by RECEIVE_THREAD_DETAIL action', () => {
    const initialState = null
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
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
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState).toEqual(action.payload.threadDetail)
  })

  it('should return the detail thread with the up voted thread when given by UP_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
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

    const action = {
      type: 'UP_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1'
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId]
    })
  })

  it('should return the detail thread with the down voted thread when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
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

    const action = {
      type: 'DOWN_VOTE_THREAD_DETAIL',
      payload: {
        userId: 'users-1'
      }
    }

    const nextState = threadDetailReducer(initialState, action)

    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [action.payload.userId]
    })
  })
})
