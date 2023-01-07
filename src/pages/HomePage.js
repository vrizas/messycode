import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import { asyncSearchThread } from '../states/threads/action'
import SearchBar from '../components/SearchBar'
import ThreadsList from '../components/ThreadsList'

function HomePage () {
  const {
    threads = [],
    users = []
  } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const onSearchThread = (keyword) => {
    dispatch(asyncSearchThread(keyword))
  }

  const threadsList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId)
  }))

  return (
    <section>
        <SearchBar search={onSearchThread} />
        <ThreadsList threads={threadsList} />
    </section>
  )
}

export default HomePage
