
const defaultProps = {
    mobile: false,
    table: false,
};


//reducers - функции в которых изменяется state.
//Принимает в себя параметр state(например, state = defaultProps) и action
//Описывает логику, по которой меняется состояние.
//
const resolution = (state = defaultProps, action) => {
    switch (action.type) {
        case 'TABLET':
            return { ...state, mobile: false, table: true }; //Прокидывается старый state, ключи с новыми значениями
                                                             //и возвравшается новый state

        case 'MOBILE':
            return { ...state, mobile: true };

        default:
            return state; // State не поменялся
    }
};

export default resolution;