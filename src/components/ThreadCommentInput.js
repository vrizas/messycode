import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadCommentInput({ comment, authUser }) {
  const [content, onContentChange, setContent] = useInput();
  const commentInputRef = useRef();
  
    const onContentChangeHandler = ({ target }) => {
        setContent(target.innerHTML);
    }

    const commentHandler = (event) => {
        event.preventDefault();
        comment(content);
        commentInputRef.current.innerHTML = '';
    }

    if (authUser) {
        return (
        <form onSubmit={(event) => commentHandler(event) }>
            <div contentEditable="true" className="border border-darkGray rounded-md min-h-[100px] px-3 py-2 bg-white" onInput={onContentChangeHandler} ref={commentInputRef}></div>
            <button type="submit" className="bg-primary py-2 px-5 text-white font-medium text-white rounded-md mt-3">Send</button>
        </form>
        );
    }

    return (
        <p><button className="text-[#38AC83]">Login</button> to give an answer</p>
    );
}

ThreadCommentInput.propTypes = {
  comment: PropTypes.func.isRequired,
  authUser: PropTypes.object,
};

export default ThreadCommentInput;
