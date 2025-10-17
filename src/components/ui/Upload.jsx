import React from 'react';

const Upload = ({icon,text}) => {
    return (
        <div>
            <button className='flex items-center bg-purple-500 py-2 px-4 rounded-xl gap-2 text-white'> {icon}{text}</button>
        </div>
    );
};

export default Upload;