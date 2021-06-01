// @ts-nocheck
/* Components */
import { Hero, Nav, TipList } from '../components';

export const TopicsByTagPage = () => {
    return (
        <>
            <section className = 'layout'>
                <Nav />
                <Hero tipViewMode = 'topic-by-tag' />
                <TipList tipViewMode = 'topic-by-tag' />
            </section>
        </>
    );
};
