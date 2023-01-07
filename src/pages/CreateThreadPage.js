import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateThreadInput from '../components/CreateThreadInput';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncCreateThread } from '../states/threads/action';
import { useNavigate } from 'react-router-dom';

function CreateThreadPage() {
    const navigate = useNavigate();
    const {
        threads = [],
        users = [],
      } = useSelector((states) => states);
    
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(asyncPopulateUsersAndThreads());
      }, [dispatch]);
    
      
      const threadsList = threads.slice(0, 3).map((thread) => ({
        ...thread,
        owner: users.find((user) => user.id === thread.ownerId),
      }));

    const onCreateThread = ({ title, body, category }) => {
        dispatch(asyncCreateThread({ title, body, category }));
        navigate(`/`);
    }
    
    return (
        <section>
            <div className="border-b border-darkGray lg:border-lightGray pb-5">
                <h2 className="font-bold text-lg mb-3">Create Thread</h2>
                <CreateThreadInput createThread={onCreateThread}  />
            </div>
            <div className="mt-5">
                <h3 className="font-bold text-lg mb-3">Latest Threads</h3>
                <ThreadsList threads={threadsList} />
            </div>
        </section>
    );
}

export default CreateThreadPage;
