import React from 'react'
import PropTypes from 'prop-types'

function LeaderboardItem ({ user, score }) {
  return (
    <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
            <img src={user.avatar} alt={user.name} width="50" height="50" className="rounded-full object-cover" />
            <span>{user.name}</span>
        </div>
        <div className="font-medium text-lg">{score}</div>
    </div>
  )
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

const leaderboardItemShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired
}

LeaderboardItem.propTypes = {
  ...leaderboardItemShape
}

LeaderboardItem.defaultProps = {
  like: null
}

export { leaderboardItemShape }

export default LeaderboardItem
