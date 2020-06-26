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
    )
}

export default About;