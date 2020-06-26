import React from 'react';
import Embed from 'react-runkit';

const Code16 =()=>{
    return(
        <div>
            <h1>Changing All Css to SASS </h1>
           <div className='code' >
               <Embed source={`
       
        $color-primary: #55c57a;
        $color-primary-light: #73d56f;
        $color-primary-dark: #28b485;
        
        $color-gray-dark: #777;
        $color-white: #fff;
        $color-black: #000;
        
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
        
        html {
          // (100%/16)*10
          font-size: 62.5%;
        }
        
        body {
          font-family: "Lato", sans-serif;
          font-weight: 400;
          line-height: 1.7;
          color: $color-gray-dark;
          padding: 3rem;
          box-sizing: border-box;
        }
        
        
        .header {
          height: 95vh;
          background-image: linear-gradient(
                          to right bottom,
                          rgba($color-primary-light, 0.8),
                          rgba($color-primary-dark, 0.8)
          ),
          url("../../img/1.jpg");
          background-size: cover;
          background-position: top;
          clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
          position: relative;
        
          &__logo-box {
            position: absolute;
            top: 4rem;
            left: 4rem;
          }
        
          &__logo {
            height: 3.5rem;
        
            &:hover {
              animation: MoveInRight 2s ease-in-out;
            }
          }
        
          &__text-box {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }
        }
        
        .heading-primary {
          color: #fff;
          text-transform: uppercase;
          backface-visibility: hidden;
        
          &--main {
            display: block;
            font-size: 6rem;
            font-weight: 600;
            letter-spacing: 3.5rem;
            animation-name: MoveInLeft;
            animation-duration: 1s;
            animation-timing-function: ease-in-out;
          }
        
          &--sub {
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
        
        
        .btn {
          &:link,
          &:visited {
            text-transform: uppercase;
            text-decoration: none;
            padding: 1.5rem 4rem;
            display: inline-block;
            border-radius: 10rem;
            transition: all 0.3s;
            font-size: 1.6rem;
            position: relative;
        
            &:hover {
              transform: translateY(-0.3rem);
              box-shadow: 0 1px 2rem rgba($color-black, 0.2);
        
        
              &:after {
                transform: scaleX(1.4) scaleY(1.6);
                opacity: 0;
              }
            }
        
            &:active {
              transform: translateY(-0.1px);
              box-shadow: 0 0.5rem 1rem rgba($color-black, 0.2);
            }
        
        
            &:after {
              content: "";
              display: inline-block;
              height: 100%;
              width: 100%;
              border-radius: 10rem;
              position: absolute;
              top: 0;
              left: 0;
              z-index: -1;
              transition: all 0.4s;
            }
          }
        
          &--white {
            background-color: $color-white;
            color: $color-gray-dark;
        
            &:after {
              background-color: $color-white;
            }
          }
        
          &--animated {
            animation: MoveInBottom 0.5s ease-out 0.75s;
            animation-fill-mode: backwards;
          }
        }
        
        
        
        @keyframes MoveInBottom {
          0% {
            opacity: 0;
            transform: translateY(3rem);
          }
        
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

            `}/>
           </div>
        </div>
    )
}

export default Code16;