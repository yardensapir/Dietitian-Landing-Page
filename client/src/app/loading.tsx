import React from 'react';

const Loading = () => {
  
  const size = 60;
  const message = 'Loading...';
  

  const spinnerColor = '#14B8A6';

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div 
        className="animate-spin rounded-full border-4 border-t-transparent"
        style={{ 
          width: `${size}px`,
          height: `${size}px`,
          borderColor: `${spinnerColor} transparent transparent transparent`
        }}
      />
      <p className="mt-4 text-gray-700">{message}</p>
    </div>
  );
};

export default Loading;

