import React from 'react'

const Profile = ({ user, handleLogout }) => {
    return (
        <div>
            Profile Page
            <div>
                {/* <h1>hi! {user.user.id}</h1> */}
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Profile
