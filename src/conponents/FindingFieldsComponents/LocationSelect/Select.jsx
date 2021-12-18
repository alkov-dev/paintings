import React from 'react';
import styles from './Select.module.css'
import vector from './vectors/down-svgrepo-com.svg'

const Select = ({data, handleLocationsId}) => {
    
//VisiblePopup
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  const [locationName, setLocationName] = React.useState('Locations')
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

  const handleLocationName = (event) => {
    handleLocationsId(event.currentTarget.id);
    for (let i = 0; i < data.length; i++) {
      if (Number(event.currentTarget.id) === i+1) setLocationName(data[i].location)
      if (Number(event.currentTarget.id) === 0) setLocationName('Locations')
    }
  }

  return (
    <div>
        <div className={styles.block__container}>
            <div ref={popupRef} className={visiblePopup === true ? styles.block__borderRadius : styles.current__value}>
              <div onClick={togleVisiblePopup} className={styles.current__block}>
                <div className={styles.name__text}>{locationName}</div>
                <img className={visiblePopup === true ? styles.img__rotate : styles.img} src={vector} alt="" />
              </div>
            </div>
            {visiblePopup && 
            <div className={styles.block__inside} >
              <div className={styles.block }>
                <ul >
                  <li className={styles.li__none} key={'none'} onClick={handleLocationName} id={0}>None</li>
                  {data.map(({id, location}) => 
                    <li key={location} onClick={handleLocationName} id={id}>
                      <div className={styles.block__item}>{location}</div>
                    </li>)}
                </ul>
              </div>
            </div>
            }
        </div>

    </div>
  );
};

export default Select;
 


