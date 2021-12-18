import React from 'react';
import styles from './Pagination.module.css'
import nextEndWhite from './vectors/NextEnd.svg'
import nextOneWhite from './vectors/NextOne.svg'
import nextEndBlack from './vectors/NextEndBlack.svg'
import nextOneBlack from './vectors/NextOneBlack.svg'
import { useTheme } from '../../context/ThemeProvider'

const Pagination = ({
    itemsPerPage, 
    totalPaitings, 
    currentPage, 
    handleClick,
    maxNumberLimit,
    minNumberLimit,
    handleNext,
    handlePrev,
    handleEnd,
    handleStart
}) => {
    const [nextOneColor, setNextOneColor] = React.useState('dark')
    const [nextEndColor, setNextEndColor] = React.useState('dark')
    const isTheme = useTheme()
    const pages = []

    React.useEffect(() => {
        if (isTheme.theme === 'light') {
            setNextOneColor(nextOneBlack) 
            setNextEndColor(nextEndBlack)
        } else {
            setNextOneColor(nextOneWhite)
            setNextEndColor(nextEndWhite)
        }
    }, [isTheme])

    for (let i = 1; i <= Math.ceil(totalPaitings / itemsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className={styles.pag__container}>
            <ul className={styles.pageNumbers}>
                    <button className={styles.button__prevStart}
                            onClick={handleStart}
                            disabled = {currentPage === 1 ? true : false}>
                        <img src={nextOneColor} alt="" />
                    </button>
                    <button className={styles.button__prev}
                            onClick={handlePrev}
                            disabled = {currentPage === pages[0] ? true : false}>
                        <img src={nextEndColor} alt="" />
                    </button>
                {
                    pages.map((number) => {
                        
                        if (number < maxNumberLimit + 1 && number > minNumberLimit ){
                            return (
                                <li className={currentPage === number ? styles.active : ''} 
                                    key={number}
                                    id={number}
                                    onClick={handleClick}>
                                {number}
                                </li>
                                )
                        }             
                        else if (number <= maxNumberLimit && number > minNumberLimit ){
                            return (
                                <li className={currentPage === number ? styles.active : ''} 
                                    key={number}
                                    id={number}
                                    onClick={handleClick}>
                                {number}
                            </li>
                            )
                        }      
                        else {
                            return null
                        }
                    }
                    )
                }
                    <button className={styles.button__next}
                            onClick={handleNext}
                            disabled = {currentPage === pages[pages.length-1] ? true : false}>
                        <img src={nextEndColor} alt="" />
                    </button> 
                    <button className={styles.button__nextEnd}
                            onClick={handleEnd}
                            disabled = {currentPage === pages[pages.length-1] ? true : false}>
                        <img src={nextOneColor} alt="" />
                    </button> 
            </ul>
        </div>
    );
};

export default Pagination;