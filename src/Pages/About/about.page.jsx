import React from "react";
import img_63 from '../../img/63.jpg';
import img_64 from '../../img/64.jpg';
import img_65 from '../../img/65.jpg';


const About = () => {
    return (
        <div>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big ">
                    <h2 className="heading-secondary">
                        Exiting Tours for the adventures Type
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small ">
                            Work, Travel, Save, Repeat
                        </h3>
                        <div className="paragraph">
                            No one realizes how beautiful it is to travel until he comes home and rests his head on his
                            old, familiar pillow
                        </div>
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Dare to live the life you’ve always wanted.
                        </h3>
                        <div className="paragraph">
                            Our battered suitcases were piled on the sidewalk again; we had longer ways to go. But no matter, the road is life.

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
    )
}

export default About;