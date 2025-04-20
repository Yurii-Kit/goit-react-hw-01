import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ name, avatar, isOnline }) => {
  // const classNames = [css.text];
  // classNames.push(isOnline ? css.online : css.offline);
  const finalCls = clsx(css.text, {
    [css.online]: isOnline,
    [css.offline]: !isOnline,
  });
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={finalCls}>{isOnline ? 'Online' : 'Offline'}</p>
      {/* <p className={classNames.join(' ')}>{isOnline ? 'Online' : 'Offline'}</p> */}
    </div>
  );
};

export default FriendListItem;
