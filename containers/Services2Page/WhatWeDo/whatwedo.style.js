import styled from 'styled-components';
import {device} from '../../../components/device';
import {Commonpara,SectionHeading} from '../../../components/common.style';
import {Row} from 'react-bootstrap';


export const WhatWeDoSection = styled.section`
    padding:100px 0px;

    @media ${device.laptop} {
        padding:100px 0px 80px;
    }

    @media ${device.tablet} {
        padding:80px 10px 60px;
    }
`;

export const WhatWeDoInner = styled.div`
    
`;

export const WhatWeDoRow = styled(Row)`
    flex-direction: row-reverse;
    align-items:center;
    @media ${device.tablet} {
        :last-child{
            padding-bottom:0px;
        }
    }
`;

export const WhatWeDoRight = styled.div`
    position: relative;
    text-align:right;

    @media ${device.tablet} {
        text-align:right;
    }
`;

export const WhatWeDoRightImgHolder = styled.div`
    padding:0px 40px;

    @media ${device.laptop} {
        padding:0px 10px;
    }
    @media ${device.tablet} {
        padding:0px;
    }
`;

export const WhatWeDoLeft = styled.div`
    @media ${device.tablet} {
        text-align:left;
    }
`;

export const WhatWeDoLeftHeading = styled(SectionHeading)`
    text-align:left;
    
    @media ${device.tablet} {
        margin-top:40px;
    }
`;

export const WhatWeDoLeftPara = styled(Commonpara)`
    text-align:left;
    font-size:14px;
`;

export const Img = styled.img`

`;
