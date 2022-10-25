import styles from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            { isOnline ? <span className={styles.online}></span> : <span className={styles.offline}></span>}
            <img className={styles.avatar} src={ avatar } alt="User avatar" width="48" />
            <p className={styles.name}>{ name }</p>
        </li>
    );
}