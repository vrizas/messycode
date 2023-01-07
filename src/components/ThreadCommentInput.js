import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function ThreadCommentInput({ comment, authUser }) {
  const [text, setText] = useState('');
  const navigate = useNavigate('/');

  function commentHandler() {
    if (text.trim()) {
      comment(text);
      setText('');
      navigate('/');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setText(target.value);
    }
  }

  if (authUser) {
    return (
      <div className="comment-input">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Leave a comment..."
        />
        {/* <div contentEditable="true"></div> */}
        <button onClick={commentHandler}>Comment</button>
      </div>
    );
  }

  return (
    <p><button className="text-[#38AC83]">Login</button> to give an answer</p>
  );
}

ThreadCommentInput.propTypes = {
  comment: PropTypes.func.isRequired,
  authUser: PropTypes.object.isRequired
};

export default ThreadCommentInput;
