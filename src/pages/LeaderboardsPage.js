import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LeaderboardsList from '../components/LeaderboardsList'
import { asyncGetLeaderboards } from '../states/leaderboards/action'

function LeaderboardsPage () {
  const {
    leaderboards = []
  } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetLeaderboards())
  }, [dispatch])

  return (
    <section>
        <h2 className="font-bold text-lg mb-8">Leaderboards</h2>
        <LeaderboardsList leaderboards={leaderboards} />
    </section>
  )
}

export default LeaderboardsPage
