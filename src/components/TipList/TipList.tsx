// @ts-nocheck
/* Core */
import { FC, useContext } from 'react';

/* Components */
import { Tip } from './Tip';

/* Other */
import { TagContext } from '../../lib';
import { useTips } from '../../hooks';
import { fetchify } from '../../helpers';

export const TipList: FC = ({ tipViewMode }) => {
    const query = useTips();
    const [selectedTagId] = useContext(TagContext);
    let tips = query.data;

    if (tipViewMode === 'topic-by-tag') {
        tips = tips?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return <section className = 'tip-list'>{ fetchify(query.isFetched, tipsJSX) }</section>;
};
