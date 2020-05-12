
const resolution = (e) =>(dispatch)=>{
    //Происходит корированная функция из-за bindActionCreators.
    // dispatch в аргументе - это изменение состояния ниже.

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
    //dispatch  - метод для запуска  действия изменения состояния action. Для вызова какого-то события
    // action - функция-дейсвтие, заскает reduser и если надо, отправляет в него данные, которые в себе соденржит
    //называется "вызов action". Это функция, но данные передаёт в reducer в виде объекта
    //action всегда содержит в себе 2 ключа: type и payload. payload - полезная нагрузка.
    //В type описывается какое-то действие.
    //action меняет состояние state в отличие от reduser, который это состояние описывает
        dispatch({
            type: tabletFlag
                ? 'TABLET'
                : mobileFlag
                    ? 'MOBILE'
                    : "",
        })
}

export default resolution

