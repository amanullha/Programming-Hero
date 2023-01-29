import React from 'react';

const SingleExpert = ({ expert }) => {
    const { id, name, img, } = expert;




    return (
        <div className="w-full rounded overflow-hidden shadow-lg mx-auto">

            <img className="w-full" src={img} alt="" />

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>

            </div>

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Engine</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#AC</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Tracker</span>
            </div>
        </div>
    );
};

export default SingleExpert;