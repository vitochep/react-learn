import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {news} from "components/Store/actions";
import Block from "../../components/Slider/Block";
import Title from "../../components/Title/Title";


class News extends React.Component {

    static defaultProps = {
        data: [],
    }
    componentDidMount = () => {

        //Получает функцию get() из action news, которые являются пропсами News
        this.props.news.get()
    }

    render = () => {

        //Показыввает data и actions(в данном случае) у News
        console.log('props news', this.props)

        //реструетуризация(вычленение data) из пропсов News
        const {data} = this.props;


        //Перебирает в маассиве  id, title,  description
        // которые прописаны в хранилище mockoon
        return data.map(({
                             id,
                             title,
                             description
                         }, i) => {
            return <Block>
                <Title>
                    {id}{title}
                </Title>
                <Block>
                    {description}
                </Block>
            </Block>
        });
    };
};

export default connect((store) => ({
    data: store.news,
}), (dispatch) => ({
    news: bindActionCreators(news, dispatch)
}))(News);