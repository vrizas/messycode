import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem from './ThreadCommentItem';

function ThreadCommentsList({ comments }) {

  return (
    <div className="mt-5 flex flex-col gap-4">
        {
            comments.map((comment) => (
                <ThreadCommentItem key={comment.id} {...comment} />
            ))
        }
    </div>
  );
}

ThreadCommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ThreadCommentsList;
