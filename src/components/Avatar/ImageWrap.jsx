import styled from 'styled-components';


const ImageWrap = styled.div`
    position:       relative;
    padding-bottom: 140%;
    
    
    & img{
    position:        absolute;
    object-fit:      cover;
    object-position: center;
    width:           100%;
    height:          100%;
    top:             0;
    left:            0;
    border-radius:   5px;
    background-color: #f7f7f7;
    }
    
`;

export default ImageWrap;