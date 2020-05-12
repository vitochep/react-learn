import Store from 'components/Store'

const resolution = () =>{
    window.addEventListener('resize', (e) => {
        const width = e.currentTarget.innerWidth;

        //одновременно с генерацией кастомного события
        //меняется changeMobile на новый flag
        const tabletFlag = width < 1024 && width > 768;
        const mobileFlag = width < 768;

        //изменение состояния (по сути и есть action)
        //  если tabletFlag, то передавать 'TABLET'.
        // в противном случае mobileFlag.
        //А если mobileFlag, то передавать 'MOBILE'.
        //в противном случае ничего
        Store.dispatch({
            type: tabletFlag
                ? 'TABLET'
                : mobileFlag
                    ? 'MOBILE'
                    : "",
        })
    });
}

export default resolution

