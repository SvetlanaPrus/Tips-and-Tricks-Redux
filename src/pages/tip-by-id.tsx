/* Core */
import { FC } from 'react';

/* Components */
import { Nav } from '../components';
import { RecentTipsAside, TipView, TagsAside } from '../features/tip-by-id';

export const TipByIdPage: FC = () => {
    return (
        <>
            <section className = 'layout'>
                <Nav />

                <section className = 'tip-view-layout'>
                    <TipView />

                    <section className = 'asides'>
                        <RecentTipsAside />
                        <TagsAside />
                    </section>
                </section>
            </section>
        </>
    );
};
