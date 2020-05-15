import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {news} from 'components/Store/actions';
import {NewsItem} from 'components/News';
import Paginate from 'components/Paginate';

class News extends React.Component {
	static defaultProps = {
		data: [],
	};

	render = () => {
		const { data } = this.props;

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

export default connect((store) => ({
	data: store.news,
}), (dispatch) => ({
	news: bindActionCreators(news, dispatch),
}))(News);
