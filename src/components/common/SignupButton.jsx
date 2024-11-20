import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

function SignupButton() {
    const { loginWithRedirect } = useAuth0(); 

    const handleSignup = () => {
        return loginWithRedirect({screen_hint: 'signup'});
    };

    return (
        <button
            className='btn signup-btn'
            onClick={handleSignup}
        >
            Sign Up
        </button>
    );
}

export default SignupButton;