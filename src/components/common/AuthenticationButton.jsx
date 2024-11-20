import React from "react";

import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

import { useAuth0 } from "@auth0/auth0-react";

function AuthenticationButton() {
    const { isAuthenticated } = useAuth0();
    console.log('AuthenticationButton', isAuthenticated);
    return (
        isAuthenticated ? <LogoutButton /> : <LoginButton />
    );
}

export default AuthenticationButton; 