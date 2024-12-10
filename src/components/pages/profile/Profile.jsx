import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ProfileNode from "../../common/ProfileNode";

import '../../../styles/ProfilePage.less';

function Profile() {
    let { user } = useAuth0();

    return (
        <div className="profile-container">
            <div className="profile-pic">
                < img
                    src="https://s.gravatar.com/avatar/0c1aee7b48ba90e17c4dc30cc45a29ff?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fco.png"
                    alt="profile"
                />
            </div>
            <div className="information-container">
                {Object.keys(user).map((key) => {
                if (
                    key !== 'updated_at' &&
                    key !== 'sub' &&
                    key !== 'picture' &&
                    key !== 'email_verified'

                ) {
                    return (<ProfileNode
                        name={key}
                        key={key}
                        value={user[key]}
                    />);
                }
                })}
            </div>
            
            
        </div>
    );
}

export default Profile;