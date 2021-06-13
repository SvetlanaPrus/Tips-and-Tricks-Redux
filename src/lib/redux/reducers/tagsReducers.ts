// Other
import { typesTags } from '../types/tagsTypes';

const initialState = {
    selectedTag: null,
};

export const tagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesTags.SET_TAG: {
            return {
                ...state,
                selectedTag: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
