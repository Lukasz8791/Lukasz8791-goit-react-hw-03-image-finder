import React from 'react';
import LoaderSpinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <LoaderSpinner type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
