import React from "react";
import Card from "../../Components/card.component";

const Tours = () => {
    return (
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
    )
}

export default Tours;