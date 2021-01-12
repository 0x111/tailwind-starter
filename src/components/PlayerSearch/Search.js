import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <div className='flex flex-row justify-center m-4'>
            <input className='p-4 w-full text-xl h-16 focus:outline-none rounded-md border-2 border-gray-800 placeholder-gray-700' placeholder='LoganPaul#12345' />
            <select name="platform" id="platforms">
                <option value="battle">Battle.net</option>
                <option value="acti">Activision</option>
                <option value="psn">Playstation</option>
                <option value="xbox">Xbox</option>
            </select>
        </div>
    )
}

export default Search;