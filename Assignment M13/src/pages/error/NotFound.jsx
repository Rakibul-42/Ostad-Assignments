import React from 'react';

const NotFound = () => {
    return (

        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <img src="https://www.freeparking.co.nz/learn/wp-content/uploads/2023/06/768x385-21.png" alt="Error" className="w-32 h-32 mx-auto mb-4" />
                <h1 className="text-2xl font-bold">Page Not Found</h1>
                <p className="text-gray-600">The page you are looking for does not exist.</p>
            </div>
        </div>



    );
};

export default NotFound;