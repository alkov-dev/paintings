// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar2
//react-pizza 4lesson
import React from 'react';
import styles from './CurrentSelect.module.css'
import vector from './vectors/down-svgrepo-com.svg'

const CurrentSelect = ({data, handleAuthorsId}) => {

// console.log(data)

//VisiblePopup
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  const [authorName, setAuthorName] = React.useState('Authors')
  const popupRef = React.useRef()
  const togleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
  }
  const handleOutsideClick = (event) => {
    if (!event.path.includes(popupRef.current)) setVisiblePopup(false)
  }
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
    }, [])
//----------------------------------

  const handleAuthorsName = (event) => {
    handleAuthorsId(event.currentTarget.id);
    for (let i = 0; i < data.length; i++) {
      if (Number(event.currentTarget.id) === i+1) setAuthorName(data[i].name)
      if (Number(event.currentTarget.id) === 0) setAuthorName('Authors')
    }


  }

  return (
    <div>

        <div className={styles.block__container}>
            <div ref={popupRef} className={visiblePopup === true ? styles.block__borderRadius : styles.current__value}>
              <div onClick={togleVisiblePopup} className={styles.current__block}>
                <div>{authorName}</div>
                <img className={visiblePopup === true ? styles.img__rotate : styles.img} src={vector} alt="" />
              </div>
            </div>
            {visiblePopup && 
            <div className={styles.block__inside} >
              <div className={styles.block }>
                <ul >
                  <li className={styles.li__none} key={'none'} onClick={handleAuthorsName} id={0}>None</li>
                  {data.map(({id, name}) => 
                    <li key={name} onClick={handleAuthorsName} id={id}>
                      <div className={styles.block__item}>{name}</div>
                    </li>)}
                </ul>
              </div>
            </div>
            }
        </div>

    </div>
  );
};

export default CurrentSelect;
 


