import React from 'react';

const TeamMembers = ({ team }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Team</h2>
            <div className="flex justify-evenly ">
                {team.map((member, index) => (
                    <div key={index}>

                        <h4 className='text-xl font-bold'>{member.name}</h4>
                        <p className='text-xs font-semibold'>{member.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMembers;
