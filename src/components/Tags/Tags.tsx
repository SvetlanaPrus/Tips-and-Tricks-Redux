// @ts-nocheck
/* Core */
import React, { FC, useEffect } from 'react';

/* Components */
import { useDispatch, useSelector } from 'react-redux';
import { Tag } from './Tag';

/* Other */
import { useTags } from '../../hooks';
import { fetchify } from '../../helpers';
import { tagsActions } from '../../lib/redux/actions';
import { getTag } from '../../lib/redux/selectors';

export const Tags: FC = ({ tipViewMode }) => {
    const { data: tags, isFetchedAfterMount, isFetched } = useTags();  /* ALL - getting array of tags */
    const dispatch = useDispatch();

    const selectedTagId = useSelector(getTag);

    const setSelectedTagId = (id) => {
        const test = tagsActions.setTags(id);
        dispatch(test);
    };

    useEffect(() => {
        if (!selectedTagId && Array.isArray(tags)) {
            setSelectedTagId(tags[ 0 ].id);
        }
    }, [isFetchedAfterMount]);

    const handleTagClick = (id) => {
        setSelectedTagId(id);
    };

    const tagsJSX = tags?.map((tag) => (
        <Tag
            key = { tag.id }
            { ...tag }
            dataActive = { tipViewMode === 'all-topics' || selectedTagId === tag.id }
            handleTagClick = { handleTagClick } />
    ));

    return <div className = 'tags'>{ fetchify(isFetched, tagsJSX) }</div>;
};
