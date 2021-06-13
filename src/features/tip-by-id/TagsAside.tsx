// @ts-nocheck
/* Core */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

/* Components */
import { useDispatch } from 'react-redux';
import { Tag } from '../../components';

/* Other */
import { fetchify, getTagIcon } from '../../helpers';
import { useTags } from '../../hooks';
import { tagsActions } from '../../lib/redux/actions';

export const TagsAside: FC = observer(() => {
    const { data: tags, isFetched } = useTags();
    const dispatch = useDispatch();

    const setSelectedTagId = (id) => {
        const test = tagsActions.setTags(id);
        dispatch(test);
    };

    const tagsJSX = tags?.map((tag) => {
        const TagIcon = getTagIcon(tag.name);

        return (
            <Link to = '/topics-by-tag' key = { tag.id }>
                <Tag
                    handleTagClick = { () => setSelectedTagId(tag.id) }
                    dataActive = { false }
                    key = { tag.id }
                    name = { tag.name }>
                    <TagIcon />
                </Tag>
            </Link>
        );
    });

    return (
        <aside className = 'tags-aside'>
            <h1>Тэги</h1>
            <div>{ fetchify(isFetched, tagsJSX) }</div>
        </aside>
    );
});
