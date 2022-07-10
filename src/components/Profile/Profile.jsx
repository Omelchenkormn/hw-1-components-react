import PropTypes from 'prop-types';
import { Card,Description,Img,Stats,UserName,Tag,Location,List,Quantity,Label } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Card>
            <Description>
                <Img src={avatar} alt={username}
                />
                <UserName>{username}</UserName>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <Stats>
                <List>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </List>
                <List>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </List>
                <List>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </List>
                </Stats>
        </Card>
    );
};

Profile.propType = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
}