import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem from './ThreadCommentItem';

function ThreadCommentsList({ comments, upVoteComment, downVoteComment, authUser }) {

  return (
    <div className="mt-5 flex flex-col gap-4">
        {
            comments.map((comment) => (
                <ThreadCommentItem key={comment.id} {...comment} upVoteComment={upVoteComment} downVoteComment={downVoteComment} authUser={authUser} />
            ))
        }
    </div>
  );
}

ThreadCommentsList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object).isRequired,
    upVoteComment: PropTypes.func.isRequired,
    downVoteComment: PropTypes.func.isRequired,
    authUser: PropTypes.object,
}

export default ThreadCommentsList;
