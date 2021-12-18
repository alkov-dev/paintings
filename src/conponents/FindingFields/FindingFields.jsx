import React from 'react';
import Select from '../FindingFieldsComponents/LocationSelect/Select';
import CurrentSelect from '../FindingFieldsComponents/Selector/CurrentSelect';
import styles from './FindingFields.module.css'
import Search from '../FindingFieldsComponents/SearchInput/Search';
import CreatedSelect from '../FindingFieldsComponents/CreatedSelect';

const FindingFields = ({
  authorsData, 
  handleAuthorsId, 
  locationsData, 
  handleLocationsId, 
  handleInputValue, 
  inputValue, 
  valueGte,
  valueLte,
  handleCreatedInputGte,
  handleCreatedInputLte,
  setValueGte,
  setValueLte
}) => {

  return (
    <div className={styles.container}>
      <div className={styles.item}>

        <Search 
          handleInputValue={handleInputValue}
          inputValue={inputValue}/>

        <Select 
          data={locationsData}
          handleLocationsId={handleLocationsId}
        />
        <CurrentSelect 
          data={authorsData}
          handleAuthorsId={handleAuthorsId}
        />
        <CreatedSelect 
          valueGte={valueGte}
          valueLte={valueLte}
          handleCreatedInputGte={handleCreatedInputGte}
          handleCreatedInputLte={handleCreatedInputLte}
          setValueGte={setValueGte}
          setValueLte={setValueLte}
        />

      </div>
    </div>
  );
};

export default FindingFields;