// @ts-nocheck
/* Core */
import { FC, createContext, useState } from 'react';

export const Context = createContext([false, () => null]);

export const SettingsProvider: FC = (props) => {
    const state = useState(false);

    return <Context.Provider value = { state }>{ props.children }</Context.Provider>;
};
