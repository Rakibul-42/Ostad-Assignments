import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [user, setUser] = useState([]);

  

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);
    return (
        <div>
            <div className='items-center'>
                <p>We are displaying some users by fetching data through useEffect:</p>

                <div className='grid grid-rows-3 grid-cols-3 gap-4'>
                    {user.map(member => (
                        <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden mx-auto">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600 mb-2">{member.username}</p>
                                <p className="text-gray-600 mb-2">Phone: {member.phone}</p>
                                <p className="text-gray-600">Email: {member.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UseEffect;