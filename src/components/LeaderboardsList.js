import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardsList({ leaderboards }) {
  return (
    <section className="flex flex-col gap-5">
        {
            leaderboards.map((leaderboard) => (
                <LeaderboardItem key={leaderboard.user.id} {...leaderboard}  />
            ))
        }
    </section>
  );
}

LeaderboardsList.propTypes = {
    leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
}

export default LeaderboardsList;
