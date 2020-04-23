import React from 'react';
import styled from 'styled-components';
import ImageWrap from "./ImageWrap.jsx";
import Image from "./Image.jsx";
import InputAvatar from "./Input.jsx";


const AvatarWrapper = styled.div`
    min-width:    250px;
    max-width:    250px;
    margin-right: 40px;
    
`;


class Avatar extends React.Component {
    render = () => {
        return <AvatarWrapper>
            <ImageWrap>
                <Image />
             <InputAvatar type="file" name="avatar" />
            </ImageWrap>
        </AvatarWrapper>;
    };
}

export default Avatar;
