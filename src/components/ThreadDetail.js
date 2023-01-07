import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import { FaPlay } from 'react-icons/fa';
import Parser from 'html-react-parser';

function ThreadDetail({
    id, title, body, category, upVotesBy, downVotesBy, createdAt, owner
}) {

  return (
    <section className="pb-5 border-b lg:border-b-2 border-darkGray lg:border-lightGray">
        <h2 className="font-bold text-lg">{ title }</h2>
        <div className="flex gap-3 my-2 text-sm">
            <span className="py-1 px-3 bg-secondary rounded-md">#{ category }</span>
        </div>
        <p className="text-sm">Dibuat oleh { owner.name }, { postedAt(createdAt) }</p>
        <article className="flex gap-5 mt-3">
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
                { Parser(body) }
            </div>
        </article>
    </section>
  );
}

const ownerShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};

ThreadDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape(ownerShape).isRequired,
};

export default ThreadDetail;
