import Store from 'components/Store'
const resolution =(e)=>{

        //Простой вариант создания action - когда функция вынесена в отдельный файл

        const width = e.currentTarget.innerWidth;

        const tabletFlag = width < 1024 && width > 768;
        const mobileFlag = width < 768;


        Store.dispatch({
            type: tabletFlag
                ? 'TABLET'
                : mobileFlag
                    ? 'MOBILE'
                    : "",
        })
};

export default resolution

