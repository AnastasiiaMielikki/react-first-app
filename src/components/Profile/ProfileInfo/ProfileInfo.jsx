import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
        <div>
        <img src='http://cdn1.360cities.net/pano/awesome/00557529_Bulgaria--Sunset-in-the-Forest--02-equi-jpg/equirect_crop_3_1/5.jpg' />
        </div>
        <div className={classes.descriptionBlock}>
          <div className={classes.avatar}>
            <img src='https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg' />
          </div>
          description
        </div>
      </div>
    )
}

export default ProfileInfo;


