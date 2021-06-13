// @ts-nocheck
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatus } from '../lib/redux/selectors';
import { settingsActions } from '../lib/redux/actions';

export const Settings: FC = () => {
    const dispatch = useDispatch();
    const isSettingsOpen = useSelector(getStatus);

    const setSettingsOpen = (data) => {
        dispatch(settingsActions.setStatus(data));
    };

    return (
        <section className = { `settings ${isSettingsOpen ? 'open' : 'closed'}` }>
            <header>
                <h1>Настройки</h1>
            </header>

            <footer>
                <button onClick = { () => setSettingsOpen(false) }>Закрыть</button>
            </footer>
        </section>
    );
};
