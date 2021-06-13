// @ts-nocheck
/* Core */
import React, { FC } from 'react';

/* Components */
import { useSelector } from 'react-redux';
import { Tip } from './Tip';

/* Other */
import { useTips } from '../../hooks';
import { fetchify } from '../../helpers';
import { getTag } from '../../lib/redux/selectors/tagsSelectors';

export const TipList: FC = ({ tipViewMode }) => {
    const query = useTips();
    const selectedTagId = useSelector(getTag);
    let tips = query.data;

    if (tipViewMode === 'topic-by-tag') {
        tips = tips?.filter((tip) => tip.tag.id === selectedTagId);
    }

    const tipsJSX = tips?.map((tip) => <Tip key = { tip.id } { ...tip } />);

    return <section className = 'tip-list'>{ fetchify(query.isFetched, tipsJSX) }</section>;
};
