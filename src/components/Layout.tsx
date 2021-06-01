/* Nav */
import { Nav } from './Nav';

export const Layout = ({ children }) => {
    return (
        <section className = 'layout'>
            <Nav />
            { children }
        </section>
    );
};
