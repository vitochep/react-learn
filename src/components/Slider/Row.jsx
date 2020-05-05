import styled from 'styled-components';
import Block from './Block';

const Row = styled(Block)`
	width: ${({ children }) => children.length * 100}%;
	height: 100%;
	transition: .8s;
	transform: translate(${({ x = 0 }) => x +'px'}, 0px);
	
	${(props)=> console.log('props', props )}

`;

export default Row;


//У каждого компонента есть свои пропсы - параметры.
//Их можно посмотреть, например, ${(props)=> console.log('props', props )}
//Если у компонента есть дочерние элементы, как у Row есть компоненты Slide,
//то в пропсах свойсво children покажет их как объекты

//можно данную запись вынести в функцию типа
// const func =(props)= >{
//console.log('props', props )
//}

//Тогда в Row будет
// const Row = styled(Block)`
//
// 	${func}
// `;