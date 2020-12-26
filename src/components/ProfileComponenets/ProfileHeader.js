import React from 'react'

function ProfileHeader({headerTitle}) {
    return (
        <div>
             <h3 className="text-2xl font-semibold">{headerTitle}</h3>
        <hr />
      </div>
    )
}

export default ProfileHeader
