import React from "react";
import {ReactComponent as Icon} from "../../svg/globe.svg";
import {ReactComponent as Icon2} from "../../svg/compass.svg";
import {ReactComponent as Icon3} from "../../svg/location.svg";
import {ReactComponent as Icon4} from "../../svg/gym.svg";
const Features =()=>{
    return(

        <section className='section-features'>
      

            <div className="row">
                <div className="col-1-of-4">
                    <div className="feature-box">
                        <Icon className='feature-box__icon ' />
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
    )
}

export default Features;