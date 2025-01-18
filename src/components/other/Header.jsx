import React, { useEffect, useState } from 'react'

const Header = ({ data, changeUser }) => {
    const [employeeName, setEmployeeName] = useState('');

    useEffect(() => {
        if (data && data.firstName) {
            setEmployeeName(data.firstName);  // Set employee name dynamically
        }
    }, [data]);

    const logoutUser = () => {
        localStorage.removeItem('loggedInUser');
        window.location.reload();
    };

    return (
        <div className='flex items-center justify-between p-5 bg-[#2A2A2A] rounded-md shadow-lg'>
            <h1 className='text-2xl font-medium text-white'>
                <span className='text-3xl  font-semibold'>Hello</span>, <span className='text-3xl font-bold'>{employeeName || 'Employee'}</span> 👋
            </h1>
            <button
                onClick={logoutUser}
                className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-xl hover:bg-red-700 transition duration-200'
            >
                Logout
            </button>
        </div>
    );
}

export default Header;
