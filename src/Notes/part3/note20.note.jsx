import React from "react";
import ing_63 from '../../img/63.jpg';
import ing_64 from '../../img/64.jpg';
import ing_65 from '../../img/65.jpg';
import CodeSnippet from "../../util/prismjs/codeSnippets";
const Code20 = ()=>{
    return(
        <div>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big ">
                    <h2 className="heading-secondary">
                        Exiting Tours for brave people
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small ">
                            Your going to falling in love with neature
                        </h3>
                        <div className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim facere natus nihil
                            perferendis repellat voluptate? Ad, alias eaque id iste itaque nihil nulla obcaecati
                            pariatur quasi, ratione sint, tenetur!
                        </div>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Live adventures like you never have before
                        </h3>
                        <div className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim facere natus nihil

                        </div>
                        <a href="" className="btn-text">learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={ing_63} alt="photo1" className="composition__photo composition__photo--p1"/>
                            <img src={ing_64} alt="photo2" className="composition__photo composition__photo--p2"/>
                            <img src={ing_65} alt="photo3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <h1>Source Code</h1>

                <CodeSnippet language='html' codeString={
                    `
        <div>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big ">
                    <h2 className="heading-secondary">
                        Exiting Tours for brave people
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small ">
                            Your going to falling in love with neature
                        </h3>
                        <div className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim facere natus nihil
                            perferendis repellat voluptate? Ad, alias eaque id iste itaque nihil nulla obcaecati
                            pariatur quasi, ratione sint, tenetur!
                        </div>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Live adventures like you never have before
                        </h3>
                        <div className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim facere natus nihil
                            
                        </div>
                        <a href="" className="btn-text">learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img src={img_63} alt="photo1" className="composition__photo composition__photo--p1"/>
                            <img src={img_64} alt="photo2" className="composition__photo composition__photo--p2"/>
                            <img src={img_65} alt="photo3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
                    `
                } />
          <h2>SCSS</h2>
            <CodeSnippet language='scss' codeString={`
//variables
$color-primary: #55c57a;
$color-primary-light: #73d56f;
$color-primary-dark: #28b485;
$color-gray-light-1:#f7f7f7;
$color-gray-dark: #777;
$color-white: #fff;
$color-black: #000;

//Font Sizes

$default-font-size:1.6rem;


//Grid

$grid-width:114rem;
$gutter-vertical:8rem;
$gutter-horizontal:6rem;
// these are utility classes from _utilities
.u-center-text{
  text-align:center;
}
.u-margin-bottom-8{
  margin-bottom: 8rem;
}

//these are home page styles
.section-about{
  background-color: $color-gray-light-1;
  padding: 25rem 0;
  margin-top: -20vh;
}

// These are Typography classes

.heading-secondary{
  font-size:3.5rem;
  text-transform:uppercase;
  font-weight:bolder;
  background-image:linear-gradient(to right,$color-primary-light,$color-primary-dark);
  display:inline-block;
  -webkit-background-clip: text;
  color:transparent;
  transition:all 0.3s;
  letter-spacing:.3rem;

  &:hover{
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow:0.5rem 1rem 2rem rgba($color-black,0.5)
  }
}


.heading-tertiary{
  font-size: $default-font-size;
  text-transform: uppercase;
  font-weight: 700;
}
.paragraph{
  font-size: $default-font-size;
  &:not(:last-child){
    margin-bottom: 3rem;
  }
}

// utilities
.u-center-text{
  text-align:center;
}
.u-margin-bottom-big{
  margin-bottom: 8rem;
}
.u-margin-bottom-medium{
  margin-bottom: 4rem;
}
.u-margin-bottom-small{
  margin-bottom: 1.5rem;
}

// Grid styles
  .row {
  max-width: $grid-width;
  margin: 0 auto;


  &:not(:last-child) {
    margin-bottom: $gutter-vertical;
  }

  [class^='col-'] {
    float: left;

    &:not(:last-child) {
      margin-right: $gutter-horizontal;
    }
  }

  @include clearfix;

  .col-1-of-2 {
    width: calc((100% - #{$gutter-horizontal}) / 2);
  }

  .col-1-of-3 {
    width: calc(
            (100% - #{2*$gutter-horizontal}) / 3);
  }

  .col-2-of-3 {
    width: calc(
            ((100% - #{2*$gutter-horizontal}) / 3) * 2
            + #{$gutter-horizontal}
    );
  }

  .col-1-of-4 {
    width: calc((100% - #{3*$gutter-horizontal}) / 4);
  }

  .col-3-of-4 {
    width: calc(
            ((100% - #{3*$gutter-horizontal}) / 4) * 3
            + #{$gutter-horizontal*2});
  }
}
// button components
.btn-text{
  &:link,&:visited{
    color: $color-primary;
    display: inline-block;
    text-decoration: none;
    border-bottom: .1rem solid $color-primary;
    padding: .3rem;
    font-size: $default-font-size;
    transition: all 0.3s;
  }

  &:hover{
    background-color: $color-primary;
    color: $color-white;
    box-shadow: 0 1rem 2rem rgba($color-black,.15);
    transform: translateY(-0.5rem);
  }
  &:active{
    box-shadow: 0 .5rem 1rem rgba($color-black,.15);
    transform: translateY(0);
  }
}
// composition component
.composition {
  position: relative;

  &__photo {
    width: 55%;
    box-shadow: 0 1rem 4rem rgba($color-black, 0.4);
    border-radius: 3px;
    position: absolute;
    transition: all 0.3s;
    z-index: 10;
    outline-offset: 2rem;

    &--p1 {
      left: 0;
      top: -2rem
    }

    &--p2 {
      right: 0;
      top: 2rem
    }

    &--p3 {
      left: 20%;
      top: 10rem
    }

    &:hover {
      outline: 1.5rem solid $color-primary;
      transform: scale(1.05) translateY(-.5rem);
      box-shadow: 0 2.4rem 4rem rgba($color-black, 0.5);
      z-index: 100;
    }
  }

  &:hover &__photo:not(:hover) {
    transform: scale(.75);
  }

}
            `} />
        </div>
    )
}

export default Code20;