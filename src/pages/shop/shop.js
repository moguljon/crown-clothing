import React, { Component } from 'react';
import { SHOP_DATA } from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection';

class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
              {
                  collections.map(({id, ...otherCollectionItems}) => {
                   return <PreviewCollection key={id} {...otherCollectionItems} />
                  })
              }
            </div>
        )
    }
}

export default ShopPage;