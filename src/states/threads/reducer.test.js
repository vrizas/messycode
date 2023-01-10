import threadsReducer from './reducer'

describe('threadReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = threadsReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    const initialState = []
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread Pertama',
            body: 'Ini adalah thread pertama',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0
          },
          {
            id: 'thread-2',
            title: 'Thread Kedua',
            body: 'Ini adalah thread kedua',
            category: 'General',
            createdAt: '2021-06-21T07:00:00.000Z',
            ownerId: 'users-2',
            upVotesBy: [],
            downVotesBy: [],
            totalComments: 0
          }
        ]
      }
    }

    const nextState = threadsReducer(initialState, action)

    expect(nextState).toEqual(action.payload.threads)
  })

  it('should return the threads with the new thread when given by ADD_THREADS action', () => {
    const initialState = [
      {
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
    ]

    const action = {
      type: 'CREATE_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread Kedua',
          body: 'Ini adalah thread kedua',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0
        }
      }
    }

    const nextState = threadsReducer(initialState, action)

    expect(nextState).toEqual([action.payload.thread, ...initialState])
  })

  it('should return the filtered threads when given when given by SEARCH_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      },
      {
        id: 'thread-2',
        title: 'Thread Kedua',
        body: 'Ini adalah thread kedua',
        category: 'React Native',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-2',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0
      }
    ]

    const action = {
      type: 'SEARCH_THREAD',
      payload: {
        keyword: 'react'
      }
    }

    const nextState = threadsReducer(initialState, action)

    expect(nextState).toEqual([
      initialState[1]
    ])
  })
})
