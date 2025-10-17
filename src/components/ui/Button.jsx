import React from 'react';

const Button = ({style,text}) => {
    return (
        <div className={style}>
            {text}
        </div>
    );
};

export default Button;