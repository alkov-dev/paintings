import React from 'react';
import styles from './CreatedSelect.module.css'
import vector from './vectors/down-svgrepo-com.svg'

const CreatedSelect = ({
    setValueGte,
    setValueLte,
    valueGte,
    valueLte,
    handleCreatedInputGte,
    handleCreatedInputLte
}) => {
    //VisiblePopup
    const [visiblePopup, setVisiblePopup] = React.useState(false)
    const popupRef = React.useRef()
    const togleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
        setValueGte(null)
        setValueLte(null)
    }
    const handleOutsideClick = (event) => {
        if (!event.path.includes(popupRef.current)) setVisiblePopup(false)
    }
    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])
    //----------------------------------

    const onKeyDownValidation = (event) => {
        if ( event.keyCode === 46 || event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 27 ||
            // Разрешаем: Ctrl+A
            (event.keyCode === 65 && event.ctrlKey === true) ||
            // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
            // Ничего не делаем
            return;
        }
        //запрещаем вводить больше 4 символов
        else if (event.target.value.length > 3) {
            event.preventDefault();
        }
        else {
            // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault();
            }
        }
    }

    const handleChangeGte = (event) => {
        handleCreatedInputGte(event.target.value)
    }

    const handleChangeLte = (event) => {
        handleCreatedInputLte(event.target.value)
    }

    return (
        <div>
            <div ref={popupRef} className={styles.block__container}>
                <div className={visiblePopup === true ? styles.block__borderRadius : styles.current__value}>
                    <div 
                        onClick={togleVisiblePopup} 
                        className={styles.current__block}>
                        <div >Created</div>
                        <img className={visiblePopup === true ? styles.img__rotate : styles.img} src={vector} alt="" />
                    </div>
                </div>
                {visiblePopup && 
                <div className={styles.block__inside} >
                    <div className={styles.inputs__block}>
                            <div className={styles.inputs}>
                                <input 
                                    value={valueGte} 
                                    onKeyDown={onKeyDownValidation}
                                    onChange={handleChangeGte} 
                                    type="text" 
                                    placeholder="from"/>
                            </div>
                            <div className={styles.line}></div>
                            <div className={styles.inputs}>
                                <input 
                                    value={valueLte} 
                                    onKeyDown={onKeyDownValidation}
                                    onChange={handleChangeLte} 
                                    type="text" 
                                    placeholder="before"/>
                            </div>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default CreatedSelect;







