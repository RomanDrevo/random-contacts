import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import style from './UsersPage.module.scss';
import UserCard from '../../components/user-card/UserCard';
import {fetchUsers} from '../../store/actions/usersActions';
import {
    getIsModalVisible,
    getIsNotificationOpen,
    getNotificationMessage,
    getSearchText, getUsers,
    isLoading
} from '../../store/selectors';
import Spinner from '../../components/spinner';
import PageLayout from '../../components/page-layout/PageLayout';
import EmptyState from '../../components/empty-state/EmptyState';


const UsersPage = (
    {
        fetchUsers,
        isLoading,
        users
    }
) => {

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <PageLayout>
            <div className={style['users-page-wrapper']}>
                <div className='header'>
                    <div className='title'>Organization Users</div>
                </div>
                {
                    isLoading ? <Spinner/> :
                        users.length ?
                            <div className='users-list'>
                                {
                                    users.map(user => (
                                        <UserCard
                                            key={user.id.value}
                                            user={user}
                                        />
                                    ))
                                }
                            </div>
                            : <EmptyState title='Oops!' description='No users found.'/>
                }
            </div>
        </PageLayout>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: isLoading(state),
        isModalVisible: getIsModalVisible(state),
        isNotificationOpen: getIsNotificationOpen(state),
        notificationMessage: getNotificationMessage(state),
        users: getUsers(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
