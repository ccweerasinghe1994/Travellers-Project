import React from "react";
import img_61 from '../../img/61.png';
import CodeSnippet from "../../util/prismjs/codeSnippets";

const Code19 =()=>{
    return(
        <div>
            <h1>Learn CSS float</h1>
            <img src={img_61} alt="" className="img"/>
            <section>
                <div className="row">
                    <div className="col-1-of-2">col-1-0f-2</div>
                    <div className="col-1-of-2">col-1-0f-2</div>
                </div>
                <div className="row">
                    <div className="col-1-of-3">col-1-0f-3</div>
                    <div className="col-1-of-3">col-1-0f-3</div>
                    <div className="col-1-of-3">col-1-0f-3</div>

                </div>
                <div className="row">
                    <div className="col-1-of-3">col-1-0f-3</div>
                    <div className="col-2-of-3">col-2-0f-3</div>


                </div>
                <div className="row">
                    <div className="col-1-of-4">col-1-0f-4</div>
                    <div className="col-1-of-4">col-1-0f-4</div>
                    <div className="col-1-of-4">col-1-0f-4</div>
                    <div className="col-1-of-4">col-1-0f-4</div>
                </div>

                <div className="row">
                    <div className="col-1-of-4">col-1-0f-4</div>
                    <div className="col-3-of-4">col-3-0f-4</div>

                </div>
            </section>
            <h1>Source Code</h1>
            <CodeSnippet language='scss' codeString={`
.row {
  max-width: $grid-width;
  background-color: #eee;
  margin: 0 auto;


  &:not(:last-child) {
    margin-bottom: $gutter-vertical;
  }

  [class^='col-'] {
    background: orangered;
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

            `} />
        </div>
    )
}

export default Code19;