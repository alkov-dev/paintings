import React from 'react';
import styles from './Test.module.css'



const TestSelect = () => {
    const data = [
        {id: 1, name: 'Peter'},
        {id: 2, name: 'Vasya'},
        {id: 3, name: 'Petya'},
        {id: 4, name: 'Alexander'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'Marina'}
    ]
   
    const handleClick = (id) => {
        console.log(id)
    }

    return (
        <div>
            <ul className={styles.container}>
                {data.map(({id, name}) => 
                <li onClick={() => handleClick(id)} id={id}>
                     id: <span>{id}</span> name: <span>{name}</span>
                </li> )}
            </ul>

        </div>
    );
};

export default TestSelect;