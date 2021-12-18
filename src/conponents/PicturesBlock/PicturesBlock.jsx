import styles from './PicturesBlock.module.css'
import React, {useEffect, useState} from 'react';
import { getApiResource } from '../../utils/network';
import PictureItem from '../PictureItem/PictureItem';
import { authorsURL, locationsURL,  } from '../../constants/Const'
import Pagination from '../Pagination/Pagination';
import FindingFields from '../FindingFields/FindingFields';


const PicturesBlock = () => {
    const paginationURL = "https://test-front.framework.team/paintings";
    const [paintingsData, setPicturesData] = useState([])
    const [loading, setLoading] = useState(false)
    const [authorsData, setAuthorsData] = useState([])
    const [locationsData, setLocationsData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(9)
    const [pageNumberLimit] = useState(3)
    const [maxNumberLimit, setMaxNumberLimit] = useState(3)
    const [minNumberLimit, setMinNumberLimit] = useState(0)
    const [inputValue, setInputValue] = React.useState('')
    //CreatedSelect-----------------------------------------------
    const [valueGte, setValueGte] = React.useState('')
    const [valueLte, setValueLte] = React.useState('')
    //--------------------------------------------------------------
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    useEffect(() => {
        if (screenWidth < 768 ) setItemsPerPage(6)
        else if  (screenWidth >= 768 && screenWidth < 1024) setItemsPerPage(8)
        else setItemsPerPage(9)
        window.addEventListener(`resize`, event => {
            setScreenWidth(window.innerWidth)
            if (screenWidth < 768 ) setItemsPerPage(6)
            else if  (screenWidth >= 768 && screenWidth < 1024) setItemsPerPage(8)
            else setItemsPerPage(9)
          }, false);
    }, [screenWidth])

    const getResourcePaintings = async (url) => {
        const res = await getApiResource(url)
        const data = res.map(({authorId, imageUrl,id, name, created, locationId}) => {
            return {
                id,
                name,
                imageUrl,
                authorId,
                created,
                locationId
            }
        } )
        setPicturesData(data)
    }
    const getResourceAuthors = async (url) => {
        const res = await getApiResource(url)
        const data = res.map(({id, name}) => {
            return {
                id,
                name,
            }
        } )
        setAuthorsData(data)
    }
    
    const getResourceLocations = async (url) => {
        const res = await getApiResource(url)
        const data = res.map(({id, location}) => {
            return {
                id,
                location,
            }
        } )
        setLocationsData(data)
    }

    useEffect(() => {
        setLoading(true)
        getResourcePaintings(paginationURL)
        getResourceAuthors(authorsURL)
        getResourceLocations(locationsURL)
        setLoading(false)
    }, [])

    useEffect(() => {
        let url = `https://test-front.framework.team/paintings?q=${inputValue}` 
        getResourcePaintings(url)
    }, [inputValue])

    const handleInputValue = (value) => {
        setInputValue(value)
    }

//На случай если необходимо искать по имени автора
    // const handleInputValue = (value) => {
    //     setInputValue(value)
    //     console.log(value)
    //     let URL = ''
    //     if (value !== '' ) URL = `https://test-front.framework.team/authors?q=${value}`
    //     else {
    //         setPicturesData([])
    //         URL = 'https://test-front.framework.team/authors'
    //         getResourcePaintings('https://test-front.framework.team/paintings')
    //         console.log('value is null')
    //     }
    //     getResourceSearchAuthors(URL)
    //     if (authorsSearchData.length !== 0) {
    //         let paintingsDataSearch = authorsSearchData.map(({id, name}) => {
    //             return {
    //                 id,
    //                 name
    //             }
    //         } )
    //         let addUrl = 'https://test-front.framework.team/paintings?authorId='
    //         let addAuthorId = ''
    //         for (let i = 1; i < paintingsDataSearch.length; i++) {
    //             addAuthorId += '&&authorId='+ paintingsDataSearch[i].id
    //         }
    //         let url = addUrl + paintingsDataSearch[0].id + addAuthorId
    //         getResourcePaintings(url)
    //     }
    // }

    useEffect(() => {
        if ((valueLte > valueGte)&&(valueLte < 2022)) {
            let url = `https://test-front.framework.team/paintings?created_gte=${valueGte}&&created_lte=${valueLte}`
            getResourcePaintings(url)
        }
    }, [valueGte, valueLte])

    // CreateSelect---------------------------------
    const handleCreatedInputGte = (value) => {
        setValueGte(Number(value))
        if (Number(value) > 2021) {
            alert('Необходимо ввести актуальный год (до 2021)')
            setValueGte(0)
        }
    }

    const handleCreatedInputLte = (value) => {
        setValueLte(Number(value)) 
        if (Number(value) > 2021) {
            alert('Необходимо ввести актуальный год (до 2021)')
            setValueLte(0)
        }
    }
    // ---------------------------------------------

    const handleAuthorsId = (id) => {
        let URL = ''
        if (Number(id) !== 0) URL = `https://test-front.framework.team/paintings?authorId=${id}`
        else URL = 'https://test-front.framework.team/paintings'
        getResourcePaintings(URL)
    }

    const handleLocationsId = (id) => {
        let URL = ''
        if (Number(id) !== 0) URL = `https://test-front.framework.team/paintings?locationId=${id}`
        else URL = 'https://test-front.framework.team/paintings'
        getResourcePaintings(URL)
    }
    
    const numberPages = Math.ceil(paintingsData.length / itemsPerPage)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    let currentItems = paintingsData.slice(indexOfFirstItem, indexOfLastItem)
    if (currentItems.length === 0) {
        currentItems = paintingsData
    } 
    
    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
    }

    const handleNext = () => {
        setCurrentPage(currentPage+1)
        if (currentPage + 1 > maxNumberLimit) {
            setMaxNumberLimit(maxNumberLimit+pageNumberLimit)
            setMinNumberLimit(minNumberLimit+pageNumberLimit)
        }
    }

    const handlePrev = () => {
        setCurrentPage(currentPage - 1) 
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setMaxNumberLimit(maxNumberLimit - pageNumberLimit)
            setMinNumberLimit(minNumberLimit - pageNumberLimit)
        }
    }

    const handleEnd = () => {
        setCurrentPage(numberPages)
        setMaxNumberLimit(numberPages)
        setMinNumberLimit(numberPages-pageNumberLimit)
    }

    const handleStart = () => {
        setCurrentPage(1)
        setMaxNumberLimit(pageNumberLimit)
        setMinNumberLimit(0)
    }
    
    if (loading){ return <h2>Loading...</h2>  }
    
    return (
        <div>
            <FindingFields 
                inputValue={inputValue}
                handleInputValue={handleInputValue}
                authorsData={authorsData}
                handleAuthorsId={handleAuthorsId}
                locationsData={locationsData}
                handleLocationsId={handleLocationsId}
                valueGte={valueGte}
                valueLte={valueLte}
                handleCreatedInputGte={handleCreatedInputGte}
                handleCreatedInputLte={handleCreatedInputLte}
                setValueGte={setValueGte}
                setValueLte={setValueLte}
            />

            {locationsData && (
                <div>
                {authorsData && (
                        <div className={styles.pictures__container}>
                        {paintingsData && (
                            <div>
                                <ul className={styles.paintings__container}>
                                    {currentItems.map(({id, name, imageUrl, authorId, created, locationId}) => 
                                    <li key={id+name}><PictureItem 
                                        name={name} 
                                        imageUrl={imageUrl}
                                        author={authorsData[authorId-1].name}
                                        location={locationsData[locationId-1].location}
                                        created={created}
                                        />
                                    </li>)}
                                </ul>
                            </div>
                        )}
                        </div> 
                )}
                {paintingsData.length > itemsPerPage && (
                <div className={styles.pagination__block}>
                    <Pagination 
                        handleNext={handleNext}
                        handleEnd={handleEnd}
                        handleStart={handleStart}
                        handlePrev={handlePrev}
                        minNumberLimit={minNumberLimit}
                        maxNumberLimit={maxNumberLimit}
                        handleClick={handleClick}
                        data={paintingsData}
                        numberPages={numberPages}
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage} 
                        totalPaitings={paintingsData.length}/>
                </div>
                )} 
                </div>
            )}
        </div>
    );
};

export default PicturesBlock;