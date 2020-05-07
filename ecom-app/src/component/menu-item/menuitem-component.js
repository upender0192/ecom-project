import React from 'react';
import './menuiitem-style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title , imageurl , size , history , linkUrl,match}) => (
    <div className="menuitem" onClick = {() => history.push(`${match.url}${linkUrl}`)}>
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

export default  withRouter(MenuItem);