import React from 'react';
import {getSelectedUser} from '../../store/selectors';
import {connect} from 'react-redux';

const UserDetailsPage = ({selectedUser}) => {
    return (
        <h1>{selectedUser.name.first}</h1>
    );
};

const mapStateToProps = state => {
    return {
        selectedUser: getSelectedUser(state),
    };
};

export default connect(mapStateToProps, {})(UserDetailsPage);
