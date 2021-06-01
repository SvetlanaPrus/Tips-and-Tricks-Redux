// Other
import { types } from '../types';

const initialState = {
    token:        '',
    errorMessage: '',
    error:        false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TOKEN: {
            return {
                ...state,
                token:        action.payload,
                error:        false, // очищаем старый статус об ощибке
                errorMessage: '', // очищаем старое сообщение об ошибке
            };
        }
        case types.SET_ERROR: {
            return {
                ...state,
                errorMessage: action.payload,
                error:        true,
            };
        }
        case types.RESET_ERROR: {
            return {
                ...state,
                errorMessage: '',
                error:        false,
            };
        }
        default: {
            return state;
        }
    }
};
