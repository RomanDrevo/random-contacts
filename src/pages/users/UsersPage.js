import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import style from './UsersPage.module.scss';
import UserCard from '../../components/user-card/UserCard';
import {fetchUsers, selectUser} from '../../store/actions/usersActions';
import {
    getIsModalVisible,
    getIsNotificationOpen,
    getNotificationMessage,
    getUsers,
    isLoading
} from '../../store/selectors';
import Spinner from '../../components/spinner';
import PageLayout from '../../components/page-layout/PageLayout';
import EmptyState from '../../components/empty-state/EmptyState';

const UsersPage = (
    {
        fetchUsers,
        isLoading,
        users,
        selectUser,
        history
    }
) => {

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleOnClick = user => {
        selectUser(user);
    };

    return (
        <PageLayout>
            <div className={style['users-page-wrapper']}>
                {
                    isLoading ? <Spinner/> :
                        users.length ?
                            <div className='users-list'>
                                {
                                    users.map(user => (
                                        <UserCard
                                            key={user.name.first + user.id.value}
                                            user={user}
                                            handleOnClick={handleOnClick}
                                            history={history}
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
        fetchUsers: () => dispatch(fetchUsers()),
        selectUser: data => dispatch(selectUser(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
