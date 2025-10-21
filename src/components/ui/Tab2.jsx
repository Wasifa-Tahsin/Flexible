import React from 'react';

import tab2 from '../../data/tab2';

const Tab2 = () => {
    return (
     
            <div className='container mx-auto  mt-5   '>
            {
                tab2.map((tab)=>(
                    <button className='px-4 py-3 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white mx-2 rounded-xl' key={tab.id}>{tab.name}</button>
                ))
            }
        </div>
    );
};

export default Tab2;