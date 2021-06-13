// Other
import { typesTags } from '../types/tagsTypes';

export const tagsActions = Object.freeze({
    setTags: (id) => {
        return {
            type:    typesTags.SET_TAG,
            payload: id,
        };
    },
});
