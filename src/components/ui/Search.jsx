import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div className='bg-gray-100 px-4 py-2 rounded-xl  flex items-center gap-2'>
            <FaSearch></FaSearch>
            <input className='outline-none' type="text" name="text" placeholder='Search' id="" />
        </div>
    );
};

export default Search;