import React from 'react';
import {getSelectedUser} from '../../store/selectors';
import {connect} from 'react-redux';
import PageLayout from '../../components/page-layout/PageLayout';
import {LeftOutlined} from '@ant-design/icons';
import style from './UserDetailsPage.module.scss';
import {Link} from 'react-router-dom';

const UserDetailsPage = ({selectedUser}) => {

    return (
        <PageLayout>
            <div className={style['user-details-page-wrapper']}>
                <Link to='/'><LeftOutlined /> Randomize me!</Link>
                {
                    !selectedUser ? <h1>No User has been selected.</h1>
                        :
                        <>
                            <div className='userpic-wrapper'>
                                <img alt='userpic' src={selectedUser.picture.large}/>
                            </div>
                            <div className='flex'>
                                <h1>{selectedUser.name.first}</h1>
                                <h1 className='ml'>{selectedUser.name.last}</h1>
                            </div>
                            <div className='flex'>
                                <h1>{selectedUser.location.street.name}</h1>
                                <h1 className='ml'>{selectedUser.location.street.number},</h1>
                            </div>
                            <div className='flex'>
                                <h1>{selectedUser.location.city},</h1>
                                {
                                    selectedUser.location.state &&
                                    <h1 className='ml'>{selectedUser.location.state},</h1>
                                }
                                <h1 className='ml'>{selectedUser.location.country}</h1>
                            </div>
                            <h1>{selectedUser.email}</h1>
                            <div className='flex'>
                                <h1>{selectedUser.phone}</h1>
                                <h1 className='ml'>{selectedUser.cell},</h1>
                            </div>
                        </>
                }
            </div>
        </PageLayout>

    );
};

const mapStateToProps = state => {
    return {
        selectedUser: getSelectedUser(state),
    };
};

export default connect(mapStateToProps, {})(UserDetailsPage);
