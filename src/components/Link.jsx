import React from 'react';

const Link = ({link,text}) => {
    return (
        <div>
            <a className='text-purple-600 cursor-pointer' href={link}>{text}</a>
        </div>
    );
};

export default Link;