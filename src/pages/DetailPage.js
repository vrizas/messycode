import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ThreadCommentInput from '../components/ThreadCommentInput'
import ThreadDetail from '../components/ThreadDetail'
import { asyncDownVoteComment, asyncDownVoteThreadDetail, asyncReceiveThreadDetail, asyncUpVoteComment, asyncUpVoteThreadDetail, asyncAddComment } from '../states/threadDetail/action'
import ThreadCommentsList from '../components/ThreadCommentsList'

function DetailPage () {
  const { id } = useParams()
  const {
    threadDetail = null,
    authUser
  } = useSelector((states) => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  const onComment = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }))
  }

  const onUpVoteThread = () => {
    if (authUser) {
      return dispatch(asyncUpVoteThreadDetail())
    }

    alert('You should login first')
  }

  const onDownVoteThread = () => {
    if (authUser) {
      return dispatch(asyncDownVoteThreadDetail())
    }

    alert('You should login first')
  }

  const onUpVoteComment = (commentId) => {
    if (authUser) {
      return dispatch(asyncUpVoteComment(commentId))
    }

    alert('You should login first')
  }

  const onDownVoteComment = (commentId) => {
    if (authUser) {
      return dispatch(asyncDownVoteComment(commentId))
    }

    alert('You should login first')
  }

  if (!threadDetail) {
    return null
  }

  return (
    <section>
        <ThreadDetail {...threadDetail} upVoteThread={onUpVoteThread} downVoteThread={onDownVoteThread} authUser={authUser} />
        <section className="mt-5">
            <h3 className="font-medium text-md mb-2">Answers</h3>
            <ThreadCommentInput comment={onComment} authUser={authUser} />
            <ThreadCommentsList comments={threadDetail.comments} upVoteComment={onUpVoteComment} downVoteComment={onDownVoteComment} authUser={authUser} />
        </section>
    </section>
  )
}

export default DetailPage
