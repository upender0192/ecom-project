import React from 'react';
import MenuItem from '../menu-item/menuitem-component';
import './menu-directory-component.scss';

class MenuDIrectory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                    title: 'title 1',
                    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnuM0sGNqZJ38TvG6iJR30ow4AAnIhAXP58sy8DUtBn1UWzB8H&usqp=CAU',
                    id : '1'
                },
                {
                    title: 'title 2',
                    imageUrl : 'https://images-na.ssl-images-amazon.com/images/I/61YBr1gsDpL._UL1304_.jpg',
                    id : '2'
                },
                {
                    title: 'title 3',
                    imageUrl : 'https://imgs7.luluandsky.com/fit-in/707x1000/c46a684c-ab42-4e06-b225-5637924b47b3/catalog/product/8/9/8904288494662_1.jpg',
                    id : '3'
                },
                {
                    title: 'title 4',
                    imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnuM0sGNqZJ38TvG6iJR30ow4AAnIhAXP58sy8DUtBn1UWzB8H&usqp=CAU',
                    id : '4',
                    size : 'large'
                },
                {
                    title: 'title 5',
                    imageUrl : 'https://images-na.ssl-images-amazon.com/images/I/61YBr1gsDpL._UL1304_.jpg',
                    id : '5',
                    size : 'large'
                    
                }
            ]
        }
    }


    render() {
        return(
            <div className="menu_main_wrapper">
                {
                    this.state.sections.map(({id , imageUrl,title , size}) => (
                        <MenuItem key={id} title={title} imageurl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }


}

export default MenuDIrectory;