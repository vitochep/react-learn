import axios from 'axios';

//принимает в себя page и callback, который возвращает
export const get = function (page, callback) {
    return async (dispatch) => {
        try {

            //функция с await axios позволяет создавать промисы, при которых
            // callback и в нём dispatch не выполнится до тех пор, пока с базы не придут все запрашиваемыке данные
            const {data: {items, total}} = await axios.get('http://127.0.0.1:3006/news/' + page);

            //Далее вызывается функция callback, которая содержит в себе аргументы - total(общее кол-во новостей) и ещё
            //один колбэк-функцию, которая возвращает dispatch
            //
            callback(total, () => { // callback, который принимает total и ещё один безимянный callback
                dispatch({
                    type: 'SET_NEWS',
                    payload: items,
                });
            });


            //Второй вариант создания промисов и асихронной работы с базой данных.
            //then - функция, которая говорит о том, чтобы  dispatch запустился ПОСЛЕ того, как все данные из хранилища будут получены

            //Подключение к хранилщу смотреть в файле routes/News/News
            // axios.get('http://127.0.0.1:3006/news/' + page)
            //     .then(({data: {items, total}}) => {
            //         callback(total, () => {
            //             dispatch({
            //                 type: 'SET_NEWS',
            //                 payload: items,
            //             });
            //         });
            //     });
        }
        catch (err) {
            console.log('err', err.message, err);
        }
    }
};

//