// @ts-nocheck
/* Core */
import { useQuery } from 'react-query';

/* Other */
import { api } from '../api/api';

export const useTags = () => {
    const query = useQuery('tags', api.getTags);

    return query;
};
