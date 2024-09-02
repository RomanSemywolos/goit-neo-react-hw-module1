import style from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" className={style.avatar} />
      <p className={style.name}>{name}</p>
      <p className={clsx(style.isOnline, isOnline ? style.online : style.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
