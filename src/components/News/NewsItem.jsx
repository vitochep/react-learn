import React from 'react';
import styled from 'styled-components';
import imagesList from 'images/news_images';
import NewsItemHeader from './NewsItemHeader';


const Wrapper = styled.div`
	flex-direction: column;
	width: 90%;
	margin: 0 auto;
	padding: 20px;
	border-bottom: 1px solid #B7B8B7;
	height: 220px;
	background-color: white;
	align-items: flex-start;
	justify-content: flex-start;
	padding-left: 200px;
	position: relative;
	&:before{
	  content: '${(props) => props.id};';
	  width: 180px;
	  height: 180px;
	  background-color: grey;
	  background-image: url(${(props) => imagesList[props.id]});
	  background-repeat: no-repeat;
	  background-size: cover;
	  position: absolute;
	  left: 0;
	  top: 20px;
	}
	
	& h3{
	color: rgba(23, 24, 32);
	font-size: 20px;
	}
	
`;
class NewsItem extends React.Component {


    //объявляем const тех ключей, которые есть в объектах базы данных. Один объект - одна новость.
    // И деструктуризируем их из this.props.newsItem. newsItem -  получаем из  главного файла routes/News/NewsItem, где
    //просходит перебор этих item в map

    render = () => {
        const {
            id,
            title,
            description,
            published,
            category
        } = this.props.newsItem;


        return <Wrapper id={id}>
            <NewsItemHeader>
                <span>
                    {new Date(published).toLocaleString()}
                </span>
                <span>
                    {category}
                </span>
            </NewsItemHeader>
            <h3>
                {title}
            </h3>
            <div>
                {description}
            </div>
        </Wrapper>;
    };
};

export default NewsItem;
