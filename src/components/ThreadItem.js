import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { postedAt, stripHtml } from '../utils';

function ThreadItem({
  id, title, body, category, upVotesBy, downVotesBy, createdAt, owner
}) {
  return (
    <div key={ id } className="bg-white shadow-main rounded-md py-3 px-4">
        <h2 className="thread-item__head font-bold text-lg text-ellipsis overflow-hidden h-[30px] w-full"><Link to={`/threads/${id}`}>{ title }</Link></h2>
        <p className="thread-item__body text-ellipsis overflow-hidden h-[70px] w-full mt-1">{ stripHtml(body) }</p>
        <div className="flex gap-3 my-3 text-sm">
            <span className="py-1 px-3 bg-secondary rounded-md">#{ category }</span>
        </div>
        <div className="flex items-center justify-between text-xs md:text-sm">
            <span>{ upVotesBy.length + downVotesBy.length } votes</span>
            <span>Dibuat oleh { owner.name.split(' ')[0] }, { postedAt(createdAt) }</span>
        </div>
    </div>
  );
}

const ownerShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
