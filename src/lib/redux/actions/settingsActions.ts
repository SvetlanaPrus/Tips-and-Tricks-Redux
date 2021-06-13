// Other
import { typesSettings } from '../types';

export const settingsActions = Object.freeze({
    setStatus: (data) => {
        return {
            type:    typesSettings.SET_STATUS,
            payload: data,
        };
    },
});
