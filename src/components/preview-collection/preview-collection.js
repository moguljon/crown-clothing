import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item';

const PreviewCollection = ({ id, title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
              {
                  items.filter((otherItm, indx) => indx < 4).map(({id, ...otherItemProps}) => {
                      return <CollectionItem key={id} {...otherItemProps} />
                  })
              }
            </div>
        </div>
    )
}

export default PreviewCollection;