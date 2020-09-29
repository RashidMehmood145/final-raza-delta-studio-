import React from 'react';
import {WhatWeDoSection,WhatWeDoInner,
    WhatWeDoLeft,WhatWeDoRight,WhatWeDoLeftHeading,WhatWeDoLeftPara,WhatWeDoRightImgHolder,
    Img,WhatWeDoRow
} from './whatwedo.style';
import {Container,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WhatWeDo } from '../../../pagedata/Services2';

const WhatWeDoPage  = () => {
    return (
        <WhatWeDoSection id="WhatWeDoContainer">
            <Container>
                <WhatWeDoInner>
                    <WhatWeDoRow>
                        <Col md="6">
                            <WhatWeDoRight>
                                <WhatWeDoRightImgHolder>
                                    <Img 
                                        src={require("../../../assets/"+WhatWeDo.WhatWeDoRightImg)} 
                                        alt=""
                                    />
                                </WhatWeDoRightImgHolder>
                            </WhatWeDoRight>
                        </Col>

                        <Col md="6">
                            <WhatWeDoLeft>
                                <WhatWeDoLeftHeading>
                                {WhatWeDo.WhatWeDoLeftHeading}
                                </WhatWeDoLeftHeading>
                                <WhatWeDoLeftPara>
                                {WhatWeDo.WhatWeDoLeftPara1}
                                </WhatWeDoLeftPara>
                                <WhatWeDoLeftPara>
                                {WhatWeDo.WhatWeDoLeftPara2}
                                </WhatWeDoLeftPara>
                            </WhatWeDoLeft>
                        </Col>
                    </WhatWeDoRow>
                </WhatWeDoInner>
            </Container>
        </WhatWeDoSection>
    );
}
export default WhatWeDoPage;