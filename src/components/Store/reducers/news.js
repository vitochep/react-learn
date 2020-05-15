
const news = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEWS':
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};

export default news;
