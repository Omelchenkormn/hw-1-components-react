import PropTypes from 'prop-types';
import { FriendLists, FriendItem, Img, Name } from './FriendList.styled'
import css from './friendListItem.module.css';

export const FriendList = ({ friends }) => {
    return (
        <FriendLists>
            {friends.map(({ avatar, name, isOnline,id }) => (
                <FriendItem  key={id}>
                    <span className={css[isOnline]}>{isOnline}</span>
                    <Img src={avatar} alt={name}/>
                    <Name>{name}</Name>
                </FriendItem> 
            ))}
        </FriendLists>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.oneOf([true, false]),
        }),
    ),
}