import React from "react";
import img_2 from '../img/2.png';
import img_3 from '../img/3.png';
import img_4 from '../img/4.png';
import img_5 from '../img/5.png';

const Code1 = () => {
    return (
        <div>
            <h1>Universal Css Selectors</h1>
            <div>
                The CSS universal selector (*) matches elements of any type.
            </div>
            <img className='img' src={img_2} alt=""/>
            <div>
                Body Styles
            </div>
            <img src={img_3} alt="" className="img"/>
            <div>Adding Header Styles</div>
            <img src={img_4} alt="" className="img"/>
            <div>This is The output look like after the changes</div>
            <img src={img_5} alt="" className="img"/>
        </div>
    )
}

export default Code1;