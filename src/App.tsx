/* Core */
import React, { useEffect } from 'react';
import {
    Routes, Route, Outlet, Navigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast, Slide } from 'react-toastify';

/* Components */
import { Settings } from './components';
import {
    TipByIdPage, AllTopicsPage,
    TopicsByTagPage, PublishPage,
    LoginPage, SignUpPage,
} from './pages';
import { getErrorMessage } from './lib/redux/selectors';
import { authActions } from './lib/redux/actions';

export const App = () => {
    const dispatch = useDispatch();
    const errorMessage = useSelector(getErrorMessage);

    useEffect(() => {
        if (errorMessage) {
            const notify = () => toast.error(errorMessage, {
                position:        'top-right',
                autoClose:       7000,
                hideProgressBar: false,
                closeOnClick:    true,
                pauseOnHover:    true,
                draggable:       true,
                progress:        undefined,
            });
            notify();
            /**
             * необходимо очистить состояние ошибки что бы при повторном возникновении
             * такой же ошибки появилось вспылвающее сообщение
             * */
            dispatch(authActions.resetError());
        }
    }, [errorMessage]);

    return (
        <>
            <ToastContainer newestOnTop transition = { Slide } />
            <Settings />

            <Routes>
                <Route path = '/all-topics' element = { <Outlet /> }>
                    <Route path = '/' element = { <AllTopicsPage /> } />
                    <Route path = '/:id' element = { <TipByIdPage /> } />
                </Route>

                <Route path = '/topics-by-tag' element = { <Outlet /> }>
                    <Route path = '/' element = { <TopicsByTagPage /> } />
                    <Route path = '/:id' element = { <TipByIdPage /> } />
                </Route>

                <Route path = '/publish' element = { <PublishPage /> } />
                <Route path = '/login' element = { <LoginPage /> } />
                <Route path = '/signup' element = { <SignUpPage /> } />

                <Route path = '*' element = { <Navigate to = '/all-topics' /> } />
            </Routes>
        </>
    );
};
