import React, { Fragment } from "react";
import img_52 from "../../img/52.png";
import Code from "react-runkit";


const Code14 = () => {
  return (
    <div>
   
      <h1>Implementing BEM in our project</h1>

      <img className='img' src={img_52} alt='' />
      <h1>Home Page Markup</h1>
      <div className='code'>
        <Code
          source={`
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

      
      `}
        />
      </div>
      <h1>SCSS Markup</h1>
      <div className='code'>
        <div></div>
       
        <Code
          source={`
              
.header {
  height: 95vh;
  background-image: linear-gradient(to right bottom, #7ed56fd1, #7ed56fd1),
    url("../../img/1.jpg");
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
}

.header__logo-box {
  position: absolute;
  top: 4rem;
  left: 4rem;

  .header__logo {
    height: 3.5rem;

    &:hover {
      animation: MoveInRight 2s ease-in-out;
    }
  }
}

.header__text-box {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.heading-primary {
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;

  .heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 600;
    letter-spacing: 3.5rem;
    animation-name: MoveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  }

  .heading-primary--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.74rem;
    animation: MoveInRight 1s ease-out;
    margin-bottom: 6rem;
  }
}

@keyframes MoveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(2rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes MoveInRight {
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-2rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

          `}
        />
      </div>
    </div>
  );
};

export default Code14;
