import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="sticky top-0 z-50">
      <LoadingBar style={{backgroundColor: '#38AC83'}} />
    </div>
  );
}

export default Loading;
