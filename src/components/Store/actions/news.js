import axios from 'axios';

export const get = function (page, callback) {
    return async (dispatch) => {
        try {

            //функция с await axios позволяет создавать промисы, при которых
            // callback и в нём dispatch не выполнится до тех пор, пока с базы не придут все запрашиваемыке данные
            const {data: {items, total}} = await axios.get('http://127.0.0.1:3006/news/' + page);

            //Далее вызывается функция,
            callback(total, () => {
                dispatch({
                    type: 'SET_NEWS',
                    payload: items,
                });
            });

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