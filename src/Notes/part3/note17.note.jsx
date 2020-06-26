import React from 'react';
import img_55 from '../../img/55.png';
import CodeSnippet from "../../util/prismjs/codeSnippets";


const Code17 = () => {
    return (
        <div>
            <h1>Changing All Css to SASS </h1>
            <img src={img_55} alt="" className="img"/>

            <h2>Main.scss</h2>
            <CodeSnippet codeString={main} language='scss'/>

        </div>
    )
}

export default Code17;

const main = `
@import "abstract/functions";
@import "abstract/mixins";
@import "abstract/variables";

@import "base/base";
@import "base/animations";
@import "base/typography";
@import "base/utilities";

@import "pages/home";

@import 'components/button';
@import 'components/image';
@import 'components/code.block';

@import 'layout/header';
`