import React from 'react'
import PropTypes from 'prop-types'
import { postedAt } from '../utils'
import { FaPlay } from 'react-icons/fa'
import Parser from 'html-react-parser'

function ThreadCommentItem ({ id, content, createdAt, owner, upVotesBy, downVotesBy, upVoteComment, downVoteComment, authUser }) {
  const isCommentUpVoted = upVotesBy.includes(authUser?.id)
  const isCommentDownVoted = downVotesBy.includes(authUser?.id)

  return (
    <div className="border-b lg:border-b-2 border-darkGray lg:border-lightGray pb-4">
        <article className="flex gap-5">
            <div className="flex flex-col items-center gap-3 mt-2 text-darkGray">
                {
                    isCommentUpVoted
                      ? (
                        <button className="cursor-default">
                            <FaPlay className="rotate-[-90deg] text-primary" />
                        </button>
                        )
                      : (
                        <button onClick={() => upVoteComment(id)}>
                            <FaPlay className="rotate-[-90deg]" />
                        </button>
                        )
                }
                <span className="font-bold text-lg">{ upVotesBy.length - downVotesBy.length }</span>
                {
                    isCommentDownVoted
                      ? (
                        <button className="cursor-default">
                            <FaPlay className="rotate-90 text-danger" />
                        </button>
                        )
                      : (
                        <button onClick={() => downVoteComment(id)}>
                            <FaPlay className=" rotate-90" />
                        </button>
                        )
                }
            </div>
            <div>
                { Parser(content) }
            </div>
        </article>
        <p className="text-sm mt-3">Dibuat oleh { owner.name }, { postedAt(createdAt) }</p>
    </div>
  )
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

ThreadCommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
  authUser: PropTypes.object
}

export default ThreadCommentItem
