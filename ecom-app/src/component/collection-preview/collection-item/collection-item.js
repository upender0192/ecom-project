import React from 'react';

const CollectionItem = ({name,price,imageUrl}) =>(
    <div className="items">
        <div className="itemsinner">
            <div className="items_cont"
            style = {{
                backgroundImage: `url(${imageUrl})`
            }}
            >
            </div>
            <div className="items_footer">
                <span>{name}</span>
                <span>{price}</span>
            </div>
        </div>
    </div>
)

export default CollectionItem;