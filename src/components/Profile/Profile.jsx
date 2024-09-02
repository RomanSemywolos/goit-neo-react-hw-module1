import style from "./Profile.module.css";

const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <img className={style.img}
          src={image}
          alt="User avatar"
        />
        <p className={style.name}>{name}</p>
        <p className={style.contacts}>@{tag}</p>
        <p className={style.contacts}>{location}</p>
      </div>

      <ul className={style.statsContainer}>
        <li className={style.stats}>
          <span className={style.text}>Followers</span>
          <span className={style.numbers}>{stats.followers}</span>
        </li>
        <li className={style.stats}>
          <span className={style.text}>Views</span>
          <span className={style.numbers}>{stats.views}</span>
        </li>
        <li className={style.stats}>
          <span className={style.text}>Likes</span>
          <span className={style.numbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;