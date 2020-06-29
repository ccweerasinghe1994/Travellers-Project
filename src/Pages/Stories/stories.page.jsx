import React from "react";
import img_71 from '../../img/71.jpg';
const Stories = () => {
    return (
        <div className='section-stories'>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">We Make People Genuinely Happy</h2>
            </div>

            <div className="row">
                <div className="story">
                    <figure className="story__shape">
                        <img src={img_71} alt="" className="story__image"/>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small ">I had The best weekend</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloremque eius mollitia
                            nam obcaecati quis reiciendis repellendus reprehenderit. Ex, non.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, natus!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories;