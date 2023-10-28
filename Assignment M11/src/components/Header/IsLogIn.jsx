import React from 'react';

const IsLogIn = () => {
    const logIn = false ;
    return (
        <div>
             //using how Short Hand If Else & Conditional Rendering Using Ternary Operator works 
            {
                logIn?  <p>You're LogIN </p> : <p>please LogIN / singUp </p>
            }
        </div>
    );
};

export default IsLogIn;
