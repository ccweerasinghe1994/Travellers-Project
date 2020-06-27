import React from "react";
import CodeSnippet from "../../util/prismjs/codeSnippets";
import Card from "../../Components/card.component";

const Code22 = () => {
    return (
        <div>
            <h1>
                Tours Component
            </h1>
            <section className="section-tours">
                <div className="u-center-text u-margin-bottom-big ">
                    <h2 className="heading-secondary u-margin-bottom-big">
                        Most Popular Tours
                    </h2>
                    <div className="row">
                        <div className="col-1-of-3">
                            <Card title='the sea explorer'
                                  days={3}
                                  people={30}
                                  price={23}
                                  accommodation='sleep in cozy hotels'
                                  difficulty='medium' tourGuide={2}
                                  cardNo={1}
                            />


                        </div>
                        <div className="col-1-of-3">
                            <Card title='the Forest Hiker '
                                  days={3}
                                  people={40}
                                  price={23}
                                  accommodation='sleep in provided tents'
                                  difficulty='medium'
                                  tourGuide={6}
                                  cardNo={2}
                            />


                        </div>
                        <div className="col-1-of-3">
                            <Card title='the snow adventure '
                                  days={5}
                                  people={15}
                                  price={23}
                                  accommodation='sleep in provided tents'
                                  difficulty='medium'
                                  tourGuide={3}
                                  cardNo={3}
                            />

                        </div>

                    </div>
                    <div className="u-margin-bottom-big u-center-text">
                        <a href="#" className='btn btn--green u-margin-top-big '>Discover All tours</a>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <CodeSnippet language='html' codeString={`
        <section className="section-tours">
            <div className="u-center-text u-margin-bottom-big ">
                <h2 className="heading-secondary u-margin-bottom-big">
                    Most Popular Tours
                </h2>
                <div className="row">
                    <div className="col-1-of-3">
                        <Card title='the sea explorer'
                              days={3}
                              people={30}
                              price={23}
                              accommodation='sleep in cozy hotels'
                              difficulty='medium' tourGuide={2}
                        cardNo={1}
                        />


                    </div>
                    <div className="col-1-of-3">
                        <Card title='the Forest Hiker '
                              days={3}
                              people={40}
                              price={23}
                              accommodation='sleep in provided tents'
                              difficulty='medium'
                              tourGuide={6}
                              cardNo={2}
                        />


                    </div>
                    <div className="col-1-of-3">
                        <Card title='the snow adventure '
                              days={5}
                              people={15}
                              price={23}
                              accommodation='sleep in provided tents'
                              difficulty='medium'
                              tourGuide={3}
                              cardNo={3}
                        />

                    </div>

                </div>
                <div className="u-margin-bottom-big u-center-text">
                    <a href="#" className='btn btn--green u-margin-top-big '>Discover All tours</a>
                </div>
            </div>
        </section>
            `}/>
            <h1>Card Component</h1>
            <CodeSnippet language='jsx' codeString={`
import React from "react";

const Card =({title,days,people,tourGuide,accommodation,difficulty,price,cardNo})=>{
    return(
        <div className="card">
            <div className="card__side card__side--front ">
                <div className={\`card__picture card__picture--${"cardNo"}\`}/>
                <h4 className="card__header">
                                    <span className={\`card__header-span card__header-span--${"cardNo"}\`}>
                                        {title}
                                    </span>
                </h4>
                <div className="card__details">
                    <ul>
                        <li>{days} day tours</li>
                        <li>up to {people} people</li>
                        <li>{tourGuide} tour guides</li>
                        <li>{accommodation}</li>
                        <li>Difficulty {difficulty}</li>
                    </ul>
                </div>
            </div>
            <div className={\`card__side card__side--back card__side--back-${"cardNo"}\`}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <div className="card__price-only">only</div>
                        <div className="card__price-value">${"price"}</div>
                    </div>
                    <a href="#" className='btn btn--animated btn--white' >Book Now</a>
                </div>

            </div>
        </div>
    )
}
export default Card;
            `}/>
            <h2>_home.scss</h2>
            <CodeSnippet language='scss' codeString={`
            
//colors
$color-gray-light-1:#f7f7f7;
//tours section styles
.section-tours{
    padding:20rem 0;
    background-color:$color-gray-light-1;
//utilities
.u-center-text {
  text-align: center;
}

.u-margin-bottom-big {
  margin-bottom: 8rem;
} 
.u-margin-top-big {
  margin-top: 8rem;
}
 
//layout styles
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

  .col-1-of-4 {
    width: calc((100% - #{3*$gutter-horizontal}) / 4);
  }

}

  
}

//heading secondary styles
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

// button component
.btn {
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.3s;
    font-size: $default-font-size;
    position: relative;
    
    &--green {
    background-color: $color-primary;
    color: $color-white;

    &:after {
      background-color: $color-primary;
    }
  }
    
    }    
    `}/>
    <h1>Card Component Styling</h1>
    <CodeSnippet language='scss' codeString={`
    .card {
  // functionality
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;
  cursor: pointer;

  &__side {
    background-color: orangered;
    height: 52rem;
    transition: all 0.8s ease;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .15);

    &--front {
      background-color: $color-white;
    }

    &--back {

      transform: rotateY(180deg);

      &-1 {
        background-image: linear-gradient(to right bottom, $color-secondary-light, $color-secondary-dark);

      }

      &-2 {
        background-image: linear-gradient(to right bottom, $color-primary-light, $color-primary-dark)
      }

      &-3 {
        background-image: linear-gradient(to right bottom, $color-tertiary-light, $color-tertiary-dark)
      }
    }


  }

  &:hover &__side--front {
    transform: rotateY(-180deg);
  }

  &:hover &__side--back {
    transform: rotateY(0);
  }


  // front side styling
  &__picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

    &--1 {
      background-image:
      url("../../img/69.jpg");
    }

    &--2 {
      background-image: url("../../img/70.jpg");
    }

    &--3 {
      background-image: url("../../img/68.jpg");
    }

  }

  &__header {
    font-size: 2.8rem;
    text-transform: uppercase;
    color: $color-white;
    position: absolute;
    top: 12rem;
    right: 2rem;
    text-align: right;
    width: 60%;
  }

  &__header-span {
    padding: 1rem 1.5rem;
    box-decoration-break: clone;

    &--1 {
      background-image: linear-gradient(to right bottom, rgba($color-secondary-light, 0.8), rgba($color-secondary-dark, .8));
    }

    &--2 {
      background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8), rgba($color-primary-dark, .8));
    }

    &--3 {
      background-image: linear-gradient(to right bottom, rgba($color-tertiary-light, 0.8), rgba($color-tertiary-dark, .8));
    }
  }

  &__details {
    padding: 3rem;

    ul {
      margin: 0 auto;
      list-style: none;
      width: 80%;

      li {
        text-align: center;
        font-size: 1.5rem;
        text-transform: capitalize;
        padding: 1rem;

        &:not(:last-child) {
          border-bottom: 1px solid $color-gray-light-2
        }
      }
    }
  }

  // backside styling
  &__cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%

  }

  &__price-box {
    margin-bottom: 8rem;
    text-align: center;
    color: $color-white;
  }

  &__price-only {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  &__price-value {
    font-size: 6rem;
    font-weight: 200;
  }
}


    `}/>

        </div>
    )
}

export default Code22;