import React from 'react';
import styles from './Search.module.css'

const Search = ({handleInputValue, inputValue}) => {

    const onKeyDownValidation = (event) => {
        if ( event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode === 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        }
        else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode > 47 && event.keyCode < 58) ||
                //символы -=./
                (event.keyCode > 186 && event.keyCode < 192)) {
                event.preventDefault();
            }
        
        }
    }

    return (
        <div className={styles.searchInput}>
            <input className={styles.input}
                onKeyDown={onKeyDownValidation}
                onChange={(event) => handleInputValue(event.target.value)}
                value={inputValue}
                type="text"
                placeholder="name" />
        </div>
    );
};

export default Search;