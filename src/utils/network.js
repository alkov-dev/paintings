

export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        return data
    } catch (error) {
        console.log('Could not fetch : ', error.message);
        return false;
    }
}

// асинхронная функция
// (async () => {
//     const data = await getApiResource(apiUrl+apiCategory)
//     console.log(data)
//   })();

// getApiResource(apiUrl+apiCategory);