import React from 'react';
import styled from 'styled-components';
import ImageWrap from "./ImageWrap.jsx";
import InputAvatar from "./InputAvatar.jsx";


const AvatarWrapper = styled.div`
    min-width:    250px;
    max-width:    250px;
    margin-right: 40px;
    
`;


export default class Avatar extends React.Component {
    state = {
        src: ""
    };

    onChange = (e) => {
        const reader = new FileReader();

        reader.readAsDataURL(e.currentTarget.files[0]);
        reader.onload = () => {
            console.log('e', reader.result);
            this.setState({
                'src': reader.result
            })
        };
    };
    render = () => {
        return <AvatarWrapper>
            <ImageWrap>
              <img src={this.state.src} alt={""} />
             <InputAvatar type="file" name="avatar" onChange={this.onChange} />
            </ImageWrap>
        </AvatarWrapper>;
    };
}

