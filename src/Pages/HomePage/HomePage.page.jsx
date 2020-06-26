import React from "react";
import "./HomePage.styles.scss";
import img_6 from "../../img/6.png";

const HomePage = () => {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img src={img_6} alt='logo' className='header__logo' />
      </div>

      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>Outdoors</span>
          <span className='heading-primary--sub'>is where life happens</span>
        </h1>

        <a href='http://localhost:3000' className='btn btn--white btn--animated'>
          Discover Our Tours
        </a>
      </div>
    </header>
  );
};

export default HomePage;
