export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline ? 'online' : 'offline'}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
