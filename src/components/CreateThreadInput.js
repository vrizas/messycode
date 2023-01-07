import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function CreateThreadInput({ createThread }) {
  const [title, onTitleChange, setTitle] = useInput();
  const [body, onBodyChange, setBody] = useInput();
  const [category, onCategoryChange, setCategory] = useInput();
  const createThreadInputRef = useRef();
  
    const onBodyChangeHandler = ({ target }) => {
        setBody(target.innerHTML);
    }

    const createThreadHandler = (event) => {
        event.preventDefault();
        createThread({ title, body, category });
        createThreadInputRef.current.innerHTML = '';
    }

    return (
    <form className="flex flex-col gap-3" onSubmit={(event) => createThreadHandler(event) }>
        <div className="flex flex-col gap-1">
            <label htmlFor="title" className="font-medium">Title</label>
            <input type="text" id="title" className="border border-darkGray rounded-md px-3 py-2" placeholder="Title" value={title} onChange={onTitleChange} required autoFocus />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="body" className="font-medium">Body</label>
            <div contentEditable="true" id="body" className="border border-darkGray rounded-md min-h-[100px] px-3 py-2 bg-white" onInput={onBodyChangeHandler} ref={createThreadInputRef} required></div> 
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="category" className="font-medium">Category</label>
            <input type="text" id="category" className="border border-darkGray rounded-md px-3 py-2" placeholder="Category" value={category} onChange={onCategoryChange} />
        </div>
        <button type="submit" className="bg-primary py-2 px-5 text-white font-medium text-white rounded-md mt-3">Create</button>
    </form>
    );
}

CreateThreadInput.propTypes = {
  createThread: PropTypes.func.isRequired,
};

export default CreateThreadInput;
