import React from 'react';
import Button from '../../UI/Button/Button';
import './styles.scss';
import headerImage from '../../../images/illustration-working.svg';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__description">
        <h1 id={'inputLink'}>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button buttonType={'primary'}>Get Started</Button>
      </div>

      <div className="header__image">
        <img src={headerImage} alt="header women" />
      </div>
    </header>
  );
};

export default Header;
