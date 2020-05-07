import React from 'react';
import './collection-preview-style.scss';
import CollectionItem from '../collection-preview/collection-item/collection-item';

const CollectionPreview = ({title,items}) =>(
    <div className="preview-collection">
        <h2>{title}</h2>
        <div className="items_wrapper">
            {
                items.filter((item,idx) => idx<10)
                .map( ({id, ...otherItemsProp}) => (
                    <CollectionItem key={id} {...otherItemsProp}> </CollectionItem>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;