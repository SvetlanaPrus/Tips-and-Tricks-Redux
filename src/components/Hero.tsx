// @ts-nocheck
/* Components */
import { Tags } from './Tags';

export const Hero = ({ tipViewMode }) => {
    const subTitle = tipViewMode === 'all-topics' ? 'Все темы' : 'По тегу';

    return (
        <section className = 'hero'>
            <div className = 'title'>
                <h1>Типсы и Триксы</h1>
                <h2>{ subTitle }</h2>
            </div>
            <Tags tipViewMode = { tipViewMode } />
        </section>
    );
};
