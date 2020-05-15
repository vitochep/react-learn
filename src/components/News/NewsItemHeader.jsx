import styled from 'styled-components';
import {Flex as FlexWrapper}  from './../Content/Flex'

const NewsItemHeader = styled(FlexWrapper)`
    margin: 40px auto 0;
& span{
	color: #B7B8B7;
	margin-right: 20px;
	font-size: 12px;
	text-transform: upperCase;	
	}
`;
 export default  NewsItemHeader;
