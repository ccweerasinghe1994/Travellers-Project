import React from "react";
import CodeSnippet from "../../util/prismjs/codeSnippets";

const Code22 =()=>{
    return(
        <div>
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
            `}/>
        </div>
    )
}

export default Code22;