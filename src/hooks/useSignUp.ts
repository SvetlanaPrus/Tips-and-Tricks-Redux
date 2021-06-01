/* Core */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

/* Other */
import { authActions } from '../lib/redux/actions';
import { api } from '../api';

export const useSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mutation = useMutation((credentials) => {
        return api.signUp(credentials);
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            const token = mutation.data?.token;

            dispatch(authActions.setToken(token));
            localStorage.setItem('jwt', token);
            navigate('/all-topics');
        }
    }, [mutation.isSuccess]);

    return mutation;
};
