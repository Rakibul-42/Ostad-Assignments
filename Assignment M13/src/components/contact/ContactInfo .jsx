import React from 'react';

const ContactInfo = ({contactLocations}) => {
    const data = contactLocations[0]
    const {address , phone , email} = data
    

  return (
    <div className="bg-white p-4 rounded shadow-md ">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <div className="divider"></div>

    </div>

  );
};

export default ContactInfo;
