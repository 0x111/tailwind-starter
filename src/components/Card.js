import React from 'react';

const Card = () => {
    return (
        <div className="mb-5 mx-4">
            <a href="#"
               className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
               style={{"background" : "url(https://images.unsplash.com/photo-1484876065684-b683cf17d276?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)"}}>
                <div className="absolute top-0 right-0 -mt-3 mr-3">
                    <div className="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none"><i
                        className="mdi mdi-fire text-base align-middle" /> <span className="align-middle">FRESH</span>
                    </div>
                </div>
                <div className="h-48" />
                <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">Tasnim Lacey New Album
                    Out&nbsp;Now</h2>
                <div className="flex w-full items-center text-sm text-gray-300 font-medium">
                    <div className="flex-1 flex items-center">
                        <div className="rounded-full w-8 h-8 mr-3"
                             style={{"background": "url(https://randomuser.me/api/portraits/women/74.jpg) center; background-size: cover"}} />
                        <div>Gwen Thomson</div>
                    </div>
                    <div><i className="mdi mdi-thumb-up" /> 18</div>
                </div>
            </a>
        </div>
    )
}

export default Card;