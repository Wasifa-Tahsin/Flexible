import React from 'react';
import tabs from '../data/tabs';

const Tabs = () => {
    return (
        <div className='w-7xl mx-auto items-center text-center mt-5   '>
            {
                tabs.map((tab)=>(
                    <button className='px-4 py-3 bg-gray-50 hover:bg-purple-500 cursor-pointer hover:text-white mx-2 rounded-xl' key={tab.id}>{tab.name}</button>
                ))
            }
        </div>
    );
};

export default Tabs;