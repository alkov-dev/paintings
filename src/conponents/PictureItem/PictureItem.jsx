import React from 'react';
import styles from './PictureItem.module.css'
import cn from 'classnames'


const PictureItem = ({name, author, location, created, imageUrl}) => {
    let imgURL = 'https://test-front.framework.team'+ imageUrl
    
    return (
        <div className={styles.pictureItem_container}>
                <div><img src={imgURL} alt="" title={name}/></div>
                <div className={styles.description}>
                    <div className={styles.description__item}>
                        <div className={styles.description__item__ul}>
                            <div className={cn(styles.title, styles.item__li)}>
                                <span>{name} </span>
                            </div>
                            <div className={cn(styles.span, styles.item__li)}>
                                <span>Author:</span> {author}
                            </div>
                            <div className={cn(styles.span, styles.item__li)}>
                                <span>Created:</span> {created}
                            </div>
                            <div className={cn(styles.span, styles.item__li)}>
                                <span>Location:</span> {location}
                            </div>
                        </div>
                    </div>  
                </div>
        </div>
    );
};

export default PictureItem;