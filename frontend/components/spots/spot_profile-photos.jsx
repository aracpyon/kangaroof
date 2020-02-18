import React from 'react';

const ProfilePhotos = ({photos}) => {
  let photo5;
  if (photos[4]) {
    photo5 = photos[4]
  } else {
    photo5 = photos[3]
  }
  return (
    <div className="profile-photo-container">
      <div className="profile-photo-sub-container">

        <div className="seg1">
          <img className="photo1" src={photos[0]} alt="" />
        </div>
        
        <div className="seg2">
          <img className="photo2" src={photos[1]} alt="" />
          <img className="photo3" src={photos[2]} alt="" />
        </div>
        <div className="seg3">
          <img className="photo4" src={photos[3]} alt="" />
          <img className="photo5" src={photo5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProfilePhotos;