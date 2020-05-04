import React from "react";
import styled from 'styled-components'
import Block from './Block';

const Wrapper = styled(Block)`
	width: 100%;
	height: 100%;
	float: left;
	${({ color = 'grey' }) => 'background-color: '+ color};
`;


class Slide extends React.PureComponent {


    render = () => {


        return <Wrapper>

        </Wrapper>;
    };
};

export default Slide