import React from 'react';
import Loader from 'components/Loader';
import Button  from 'components/Button';

class Paginate extends React.PureComponent {
	static defaultProps = {
		func: () => {}, //объявили пропсы.Этот func объявлен в компоненте Paginate в роуте News.В него записана функция
		index: 1, //get, которая получает данные из хранилища
		limit: 10,
	};

	state = {
		index: this.props.index, //извлекли из пропсов index и записали в state
		total: 0,
		limit: this.props.limit,
	};


	//Вариант когда новости отрисовываюся вместе со всем window
	componentDidMount = () => {
		// this.props.func(this.state.index, (total, callback) => {
		// 	this.setState((currentState) => ({
		// 		...currentState,
		// 		total,
		// 	}), callback)
		// });
	};

	onPage = (indexPage) => (e) => {
		const { index: currentIndex } = this.state; //извлекли из state index

		//Если нажатая кнопка новой страницы не будет равна currentIndex(текущему индексу текущей страницы), то выводить новости
		// на новой странице. Если она будет равна, то при нажатии только на первую кнопку
		// будут меняться новости
		if (indexPage !== currentIndex) {

			//функция, которую взяли из пропсов прнимаесмт в себя кнопку, на которую нажимаем indexPage и функцию колбэк,
			//которая принимает в себя параметр total из функции callback в get и его безымянный колбэк, названный здесь как callback
			this.props.func(indexPage, (total, callback) => {
				this.setState((currentState) => ({
					...currentState,
					total, //значение total из базы данных, т.к. this.setState - это return  функции this.props.func, которая параметром этот total прнимает
                    index:indexPage,
				}), callback)   //в this.setState - второй параметр callback, который безымянный из action, и который возвращает dispatch
			});
		}
	};

	getData = () => {
        this.props.func(this.state.index, (total, callback) => {
        	this.setState((currentState) => ({
        		...currentState,
        		total,
        	}), callback)
        });
	};
	render = () => {
		const { children = [] } = this.props;
		const { total, limit, index } = this.state;
		const pages = Math.ceil(total / limit);

		return <React.Fragment>
			{children.length > 0
				? children
				: <Loader />}
			{index > 1
				? <Button onClick={this.onPage(1)}>
					First Page
				</Button>
				: <React.Fragment />}
			{(() => {
				let i = 0,
					collector = [];
				console.log('collector', collector)
				while (i < pages) {
					const index = i + 1;

					collector.push(<Button
						key={i}
						onClick={this.onPage(index)}>
						{index}
					</Button>);
					i++;
				}
				return collector;
				
			})()}
			{index < pages
				? <Button onClick={this.onPage(pages)}>
					Last Page
				</Button>
				: <React.Fragment />}


			{children.length === 0 && <Button onClick={this.getData}>Получить данные</Button>}
		</React.Fragment>;
	};
};

export default Paginate;
