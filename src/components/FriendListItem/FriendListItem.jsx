import css from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
  const classNames = [css.text];
  classNames.push(isOnline ? css.online : css.offline);
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={classNames.join(' ')}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
