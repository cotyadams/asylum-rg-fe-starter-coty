import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";

import LoadingComponent from "../../common/LoadingComponent";
import FormField from "../../common/FormField";

import '../../../styles/ProfilePage.less';

import { withAuthenticationRequired } from "@auth0/auth0-react";

function Profile() {
    const { user } = useAuth0();

    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        console.log('name', e.target.name);
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log('form data', formData);
    };
    const handleSubmit = () => {
        setFormData({ ...formData });
        console.log('submit', formData);
    };
    return (
        <div className="profile-container">
            <button onClick={() => console.log(user)}>click</button>
            <button onClick={handleSubmit}>submit</button>
            < img
                src="https://s.gravatar.com/avatar/0c1aee7b48ba90e17c4dc30cc45a29ff?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fco.png"
                className="profile-pic"
                alt="profile"
            />
            {Object.keys(formData).map((key) => {
                if (
                    key !== 'updated_at' &&
                    key !== 'sub' &&
                    key !== 'picture' &&
                    key!== 'email_verified'

                ) {
                    return (<FormField
                        label={key}
                        name={key}
                        key={key}
                        onChange={handleChange}
                        value={formData[key]}
                    />);
                }
            })}
            
        </div>
    );
}

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <LoadingComponent message='Loading'/>
});