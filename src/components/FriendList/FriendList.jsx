import style from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({friends}) => {
  return (
    <ul className={style.list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={style.line}>
            <FriendListItem {...friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
