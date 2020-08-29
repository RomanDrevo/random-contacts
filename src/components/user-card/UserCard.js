import React from 'react';
import style from './UserCard.module.scss';
import {Divider} from 'antd';
import {MailOutlined, DeleteOutlined} from '@ant-design/icons';
import {capitalizeFirstLetter} from '../../utils/helpers';

const UserCard = ({user, handleOnClick, history}) => {

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    // const date = new Date(user.BirthDate * 1000);
    // const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    // const month = months[date.getMonth()];
    // const year = date.getFullYear();
    // const day = date.getDate();

    const onClick = () => {
        handleOnClick(user);
        history.push(`/users/${user.id.value}${user.id.name}`)
    };

    return (
        <div onClick={onClick} className={style['user-card-wrapper']}>
            <div className='user-card'>
                <div className='cut-1'/>
                <div className='userpic-wrapper'>
                    <img alt='userpic' src={user.picture.large}/>
                </div>
                <Divider className='divider'/>
                <div className='flex'>
                    <div className='first-name'>{user.name.first}</div>
                    <div className='last-name'>{user.name.last}</div>
                </div>
                <Divider className='divider'/>
            </div>

        </div>
    );
};

export default UserCard;
