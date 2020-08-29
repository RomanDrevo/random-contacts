import React from 'react';
import style from './UserCard.module.scss';
import {Divider} from 'antd';

const UserCard = ({user, handleOnClick, history}) => {
    const onClick = () => {
        handleOnClick(user);
        history.push(`/users/${user.name.first}${user.name.last}`);
    };

    return (
        <div onClick={onClick} className={style['user-card-wrapper']}>
            <div className='user-card'>
                <div className='cut-1'/>
                <div className='userpic-wrapper'>
                    <img alt='userpic' src={user.picture.large}/>
                </div>
                <Divider className='divider'/>
                <div className='user-name'>{user.name.first}</div>
                <div className='user-name'>{user.name.last}</div>
                <Divider className='divider'/>
            </div>

        </div>
    );
};

export default UserCard;
