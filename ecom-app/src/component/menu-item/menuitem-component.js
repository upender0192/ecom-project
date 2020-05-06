import React from 'react';
import './menuiitem-style.scss';

const MenuItem = ({title , imageurl , size}) => (
    <div className="menuitem">
        <div 
        style= {{
            backgroundImage : `url(${imageurl})`
        }}

        className={`${size} menuitem_inner`}

        >
            <div className="items">
                <h2>{title}</h2>
                <span>Shop</span>
            </div>
        </div>    
    </div>
)

export default MenuItem;