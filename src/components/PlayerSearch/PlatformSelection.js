import React, { useState } from 'react';
import PlatformSelectionDropdown from "./PlatformSelectionDropdown";

const PlatformSelection = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
            <div className="flex flex-col items-center relative">
                <div className="w-full">
                    <div className="my-2 bg-white flex border border-gray-200 rounded">
                        <div className="flex flex-auto flex-wrap" />
                        <input className="p-4 appearance-none outline-none w-full text-gray-800 text-lg" />
                            <div
                                className="text-gray-300 w-20 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                                <button
                                    onClick={() => {
                                        setShowDropdown(!showDropdown);
                                    }}
                                    className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                         strokeLinecap="round" strokeLinejoin="round"
                                         className="feather feather-chevron-up w-4 h-4">
                                        <polyline points="18 15 12 9 6 15" />
                                    </svg>
                                </button>
                            </div>
                    </div>
                </div>

                <PlatformSelectionDropdown showDropdown={showDropdown}/>

            </div>
    )
}

export default PlatformSelection;