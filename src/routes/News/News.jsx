import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {news} from 'components/Store/actions';
import {NewsItem} from 'components/News';
import Paginate from 'components/Paginate';

class News extends React.Component {
	static defaultProps = { //обявляем объект с пропсами и
		data: [],           // записываем туда data
	};


	render = () => {
		//получаем data из пропсов
		const { data } = this.props;

		//  func={this.props.news.get} - получаем get из action, который пприсоеддинили в connect
		//Далее перебираем в массиве data
		return <React.Fragment>
			<Paginate func={this.props.news.get}>
			{data.map((item, i) => {
				return <NewsItem
					key={ i }
					newsItem={ item }/>
			})}
			</Paginate>
		</React.Fragment>;
	};
};



//connect - поключает компонет к хранилищу, принимая в себя функцию, агрумент которой - store - 
//const, в которой записано записано создание самой базы данных.  
//Функция возвращает объект, в котором есть ключ data, обявленный выше в static defaultProps.
//В data записываем store.news - т.е.  получение news из хранилища
export default connect((store) => ({
	data: store.news,


	//news -сам action, который создаётся с помощью функции bindActionCreators
	//принимает 2 параметра - функция конкретного action, описанная внутри него
	// (в данном случае const news) и его dispatch, чтобы работало обновление
}), (dispatch) => ({
	news: bindActionCreators(news, dispatch),
}))(News);


