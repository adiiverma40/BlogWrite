import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

const Loading = ({ loading }) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <PacmanLoader color={"#36D7B7"} loading={loading} size={30} />
    </div>
  );
};

export default Loading;
