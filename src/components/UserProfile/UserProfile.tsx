import { FC } from "react";

import { ExpandIcon } from "../../icons";

import s from "./userProfile.module.scss";

interface UserProfileProps {
  // TODO: change props when registration is complete
  image: string;
  username: string;
  position: string;
}
const UserProfile: FC<UserProfileProps> = ({ image, username, position }) => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img src={image} alt={username} className={s.userAvatar} />

        <div className={s.userInfo}>
          <h1>{username}</h1>
          <h2>{position}</h2>
        </div>
      </div>

      <ExpandIcon />
    </div>
  );
};

export default UserProfile;
