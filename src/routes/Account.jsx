import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
padding: ${(props)=> props.active ? '10px': '0'};



`;

const Avatar = styled(Div)`
display: block;
margin-bottom: 20px;
`



class Account extends React.Component {
    render = () => {
        return <div>
            <Div active={0}>
                <div className={'account-section'}>
                    <h1 className='account-title'>Персональные данные</h1>
                    <div className="main-container">
                        <Avatar className="avatar">
                            <div className="image-wrap">
                                <img className='image-item'
                                     src="https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg"
                                     alt="Здесь должна быть аватарка"/>
                                <input className='image-input' type="file"/>
                            </div>
                        </Avatar>
                        <div className="container-right">
                            <div className="inputs-content">
                                <div className="input-wrap mod-name">
                                    <span className='input-title'>Имя и Фамилия</span>
                                    <input className='input_item' type="text"/>
                                </div>
                                <div className="input-wrap">
                                    <span className='input-title'>Email</span>
                                    <input className='input_item' type="email"/>
                                </div>
                            </div>
                            <form action="" className="buttonSend">
                                Отправить
                            </form>
                        </div>
                    </div>
                </div>
            </Div>

        </div>;
    };
}

export default Account;

export {
    styled
}
