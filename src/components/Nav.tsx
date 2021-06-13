// @ts-nocheck
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { icons } from '../theme/icons/nav';
import { getToken, getStatus } from '../lib/redux/selectors';
import { settingsActions } from '../lib/redux/actions';

export const Nav = () => {
    const token = useSelector(getToken);

    const dispatch = useDispatch();
    const isSettingsOpen = useSelector(getStatus);

    const setSettingsOpen = (data) => {
        dispatch(settingsActions.setStatus(data));
    };

    // const handleSettingsClick = (event) => {
    //     event.preventDefault();
    //     setSettingsOpen(true);
    // };

    return (
        <nav className = 'nav'>
            <Link to = '/all-topics'>
                <h1 title = 'Типсы и Триксы'>T и T</h1>
            </Link>
            <NavLink to = '/all-topics'>
                <icons.Home /> Все темы
            </NavLink>
            <NavLink to = '/topics-by-tag'>
                <icons.Tag /> По тэгам
            </NavLink>
            <NavLink to = '/publish'>
                <icons.Publish />
                Опубликовать
            </NavLink>
            <a className = { isSettingsOpen ? 'active' : '' } onClick = { () => setSettingsOpen(true) }>
                <icons.Settings />
                Настройки
            </a>
            { !token && <NavLink to = '/login'>
                <icons.Bolt />
                Войти
            </NavLink> }
            { token && <NavLink to = '/logout'>
                <icons.Logout />
                Выйти
            </NavLink> }
        </nav>
    );
};
