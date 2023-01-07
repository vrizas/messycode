import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ThreadCommentInput from '../components/ThreadCommentInput';
import ThreadDetail from '../components/ThreadDetail';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadCommentsList from '../components/ThreadCommentsList';
import { asyncAddComment } from '../states/threadDetail/action';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onComment = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }));
  }

  if (!threadDetail) {
    return null;
  }

  return (
    <section>
        <ThreadDetail {...threadDetail} />
        <section className="mt-5">
            <h3 className="font-medium text-md mb-2">Answers</h3>
            <ThreadCommentInput comment={onComment} authUser={authUser} />
            <ThreadCommentsList comments={threadDetail.comments} />
        </section>
    </section>
  );
}

export default DetailPage;