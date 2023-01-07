import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import { FaPlay } from 'react-icons/fa';
import Parser from 'html-react-parser';

function ThreadCommentItem({ id, content, createdAt, owner, upVotesBy, downVotesBy }) {

  return (
    <div className="border-b lg:border-b-2 border-darkGray lg:border-lightGray pb-4">
        <article className="flex gap-5">
            <div className="flex flex-col items-center gap-3 mt-2 text-darkGray">
                <button>   
                    <FaPlay className=" rotate-[-90deg]" />
                </button>
                <span className="font-bold text-lg">{ upVotesBy.length - downVotesBy.length }</span>
                <button>   
                    <FaPlay className=" rotate-90" />
                </button>
            </div>
            <div>
                { Parser(content) }
            </div>
        </article>
        <p className="text-sm mt-3">Dibuat oleh { owner.name }, { postedAt(createdAt) }</p>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

ThreadCommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

export default ThreadCommentItem;
