import React from "react";
import {ReactComponent as Icon} from "../../svg/basic_world.svg";
import {ReactComponent as Icon2} from "../../svg/basic_compass.svg";
import {ReactComponent as Icon3} from "../../svg/basic_map.svg";
import {ReactComponent as Icon4} from "../../svg/basic_heart.svg";
import CodeSnippet from "../../util/prismjs/codeSnippets";

const Code31 =()=>{
    return(
        <div>


            <section className='section-features'>


                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <Icon className='feature-box__icon icon-basic-world' />
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora?
                            </p>
                        </div>
                    </div><div className="col-1-of-4">
                    <div className="feature-box">
                        <Icon2 className='feature-box__icon icon-basic-world' />
                        <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora?
                        </p>
                    </div>
                </div><div className="col-1-of-4">
                    <div className="feature-box">
                        <Icon3 className='feature-box__icon icon-basic-world' />
                        <h3 className="heading-tertiary u-margin-bottom-small">Find Tour Way</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora?
                        </p>
                    </div>
                </div><div className="col-1-of-4">
                    <div className="feature-box">
                        <Icon4 className='feature-box__icon icon-basic-world' />
                        <h3 className="heading-tertiary u-margin-bottom-small">live a healthy life</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora?
                        </p>
                    </div>
                </div>
                </div>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Creating Features Section</h1>
            <h2>Source Code</h2>
            <CodeSnippet language='html' codeString={`
            <section className='section-features'>


                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <Icon className='feature-box__icon icon-basic-world' />
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora?
                            </p>
                        </div>
                    </div><div className="col-1-of-4">
                    <div className="feature-box">
                        <Icon2 className='feature-box__icon icon-basic-world' />
                        <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora?
                        </p>
                    </div>
                </div><div className="col-1-of-4">
                    <div className="feature-box">
                        <Icon3 className='feature-box__icon icon-basic-world' />
                        <h3 className="heading-tertiary u-margin-bottom-small">Find Tour Way</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora?
                        </p>
                    </div>
                </div><div className="col-1-of-4">
                    <div className="feature-box">
                        <Icon4 className='feature-box__icon icon-basic-world' />
                        <h3 className="heading-tertiary u-margin-bottom-small">live a healthy life</h3>
                        <p className="feature-box__text">
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, tempora?
                        </p>
                    </div>
                </div>
                </div>
            </section>
            `} />
            <h2>Styles SCC</h2>
            <h2>Section  Features page styles</h2>
            <CodeSnippet language='scss' codeString={`
  
  // section page
  .section-features{
  padding: 20rem 0;
  background-image: linear-gradient(
                  to right bottom,
                  rgba($color-primary-light, 0.5),
                  rgba($color-primary-dark, 0.5)
  ),
  url("../../img/67.jpg");
  background-size: cover;
  background-position: center;
  transform: skewY(-7deg);
  margin-top: -12rem;
}
            
            `}  />
            <h2>grid Styles</h2>
            <CodeSnippet language='scss' codeString={`.row {
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
`}/>
            <h2>Feature box Component</h2>
            <CodeSnippet language='scss' codeString={`
  .feature-box {
  background: rgba($color-white, 0.85);
  font-size: 1.5rem;
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba($color-black, 0.15);
  transition: transform 0.3s;
  transform: skewY(7deg);
  &__text {

  }

  &__icon {
    margin: .5px;

  }
  &:hover{
    transform:translateY(-1.5rem) scale(1.05);
  }
}`}/>




        </div>
    )
}

export default Code31;