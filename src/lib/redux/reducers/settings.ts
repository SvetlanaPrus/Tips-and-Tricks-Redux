import { typesSettings } from '../types';

const initialState = {
    isSettingsOpen: false,
};

export const settings = (state = initialState, action) => {
    switch (action.type) {
        case typesSettings.SET_STATUS: {
            return {
                isSettingsOpen: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
