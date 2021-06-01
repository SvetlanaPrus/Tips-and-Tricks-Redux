// Other
import { types } from '../types';

export const authActions = Object.freeze({
    setToken: (token) => {
        return {
            type:    types.SET_TOKEN,
            payload: token,
        };
    },
    setError: (message) => {
        return {
            type:    types.SET_ERROR,
            payload: message,
            error:   true,
        };
    },
    resetError: () => {
        return {
            type: types.RESET_ERROR,
        };
    },
});
