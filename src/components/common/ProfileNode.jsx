import React from "react";

function ProfileNode ({name, value}) {
    return (
        <div className="form-node-container">
            <h1 className='name' >{name}:</h1>
            <p className="value">
                {value}
            </p>
        </div>
    );
}

export default ProfileNode;