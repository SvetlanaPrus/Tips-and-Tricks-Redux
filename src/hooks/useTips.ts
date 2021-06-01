/* Core */
import { useQuery } from 'react-query';

/* Other */
import { api } from '../api';

export const useTips = () => {
    const result = useQuery('tips', api.getTips);

    return result;
};
