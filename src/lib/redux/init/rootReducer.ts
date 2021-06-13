// Core
import { combineReducers } from 'redux';

// Reducers
import { authReducer as auth } from '../reducers/auth';
import { tagsReducer as tags } from '../reducers/tagsReducers';
import { settings as sett } from '../reducers/settings';

export const rootReducer = combineReducers({
    auth,
    tags,
    sett,
});
