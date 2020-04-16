import React from 'react';

class Account extends React.Component {
	render = () => {
		return <div>
            <div className="body-page">
                <div className="main-container">
                    <div className="avatar">
                        <div className="image-wrap">
                            <img  className='image-item' src="https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg" alt="Здесь должна быть аватарка"/>
                        </div>
                    </div>
                    <div className="inputName">
                        <input className='name' type="text"/>
                    </div>
                </div>
            </div>
		</div>;
	};
};

export default Account;
