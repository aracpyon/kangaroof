import React from 'react'

const ProfileDetails = ({description, address, price}) => {
  return (
    <div className="profile-body">
      <div className="profile-left">
        <div className="left-content">
          <div>{address}</div>
          <div>{description}</div>
        </div>

      </div>
      <div className="profile-right">
        <div className="price">
          <span>${price}</span>
          /night
            </div>
        <button className="check-button">Check availbility</button>
      </div>
    </div>
  )
}

export default ProfileDetails;
