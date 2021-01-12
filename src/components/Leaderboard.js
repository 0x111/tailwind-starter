import React from 'react';

const Leaderboard = () => {
    return (
        <table className='w-full text-xl bg-white rounded-t-md mb-4 text-center'>
            <tbody>
                <tr className="text-lg">
                    <th className="p-5">Name</th>
                    <th className="p-5">K/D</th>
                    <th className="p-5">Wins</th>
                    <th></th>
                </tr>
                <tr className="border-b bg-gray-100">
                    <td className="p-5">LoganPaul</td>
                    <td className="p-5">1.30</td>
                    <td className="p-5">110</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Leaderboard;