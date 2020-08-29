import React from 'react';
import style from './css/App.scss';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import UsersPage from './pages/users/UsersPage';
import {capitalizeFirstLetter} from './utils/helpers';
import ModalWindow from './components/modal-window/ModalWindow';
import {getErrorObject, getIsErrorWindowOpen} from './store/selectors';
import {toggleErrorWindowIsOpen} from './store/actions/uIStateActions';
import UserDetailsPage from './pages/user-details/UserDetailsPage';

const App = ({isErrorWindowOpen, errorObject, toggleErrorWindowIsOpen}) => {

    const handleErrorModalCancel = () => {
        toggleErrorWindowIsOpen();
    };

    return (
        <div>
            <ModalWindow
                visible={isErrorWindowOpen}
                title={capitalizeFirstLetter(errorObject.title)}
                message={errorObject.message}
                handleErrorModalCancel={handleErrorModalCancel}
            />

            <div className="main-page-content">
                <Switch>
                    <Route path='/' exact component={UsersPage}/>
                    <Route path='/users/:id' exact component={UserDetailsPage}/>
                </Switch>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isErrorWindowOpen: getIsErrorWindowOpen(state),
        errorObject: getErrorObject(state),
    };
};

function mapDispatchToProps(dispatch) {
    return {
        toggleErrorWindowIsOpen: () => dispatch(toggleErrorWindowIsOpen()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
