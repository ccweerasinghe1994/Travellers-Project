import React from "react";
import ing_62 from '../../img/62.png'
import CodeSnippet from "../../util/prismjs/codeSnippets";
const Code20 = ()=>{
    return(
        <div>
            <img src={62} alt="" className="img"/>
            <br/>
            <h1>Example</h1>
            <div>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big ">
                        <h2 className="heading-secondary">
                            Exiting Tours for brave people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">col-1-0f-2</div>
                        <div className="col-1-of-2">col-1-0f-2</div>
                    </div>
                </section>
            </div>
            <h1>Source Code</h1>
            <h2>HTML</h2>

                <CodeSnippet language='html' codeString={
                    `
            <div>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-8 ">
                        <h2 className="heading-secondary">
                            Exiting Tours for brave people
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">col-1-0f-2</div>
                        <div className="col-1-of-2">col-1-0f-2</div>
                    </div>
                </section>
            </div>
                    `
                } />
          <h2>SCSS</h2>
            <CodeSnippet language='scss' codeString={`
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
  background-image:linear-gradient(
  to right,$color-primary-light,$color-primary-dark);
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
            `} />
        </div>
    )
}

export default Code20;