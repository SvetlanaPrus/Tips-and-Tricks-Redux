// @ts-nocheck
/* Core */
import { FC, useContext, useEffect } from 'react';

/* Components */
import { Tag } from './Tag';

/* Other */
import { TagContext } from '../../lib';
import { useTags } from '../../hooks';
import { fetchify } from '../../helpers';

export const Tags: FC = ({ tipViewMode }) => {
    const [selectedTagId, setSelectedTagId] = useContext(TagContext);
    const { data: tags, isFetchedAfterMount, isFetched } = useTags();

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
