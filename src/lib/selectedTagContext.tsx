// @ts-nocheck
/* Core */
import { createContext, useState, FC } from 'react';

export const TagContext = createContext([null, () => null]);

export const SelectedTagProvider: FC = (props) => {
    const state = useState<string | null>(null);

    return <TagContext.Provider value = { state }>{ props.children }</TagContext.Provider>;
};
