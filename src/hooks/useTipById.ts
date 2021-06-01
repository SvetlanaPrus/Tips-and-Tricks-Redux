/* Core */
import { useQuery } from 'react-query';

/* Other */
import { api } from '../api';

export const useTipById = (id: string) => {
    const query = useQuery(['tips', id], () => api.getTipById(id));

    return query;
};
