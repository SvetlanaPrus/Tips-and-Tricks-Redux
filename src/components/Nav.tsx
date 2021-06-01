// @ts-nocheck
/* Core */
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

/* Other */
import { icons } from '../theme/icons/nav';
import { Context } from '../lib';
import { getToken } from '../lib/redux/selectors';

export const Nav = () => {
    const token = useSelector(getToken);
    const [isSettingsOpen, setSettingsOpen] = useContext(Context);

    const handleSettingsClick = (event) => {
        event.preventDefault();

        setSettingsOpen(true);
    };

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
            <a className = { isSettingsOpen ? 'active' : '' } onClick = { handleSettingsClick }>
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
