import styled from 'styled-components';
import {device} from '../../../components/device';
import {Commonpara,SectionHeading} from '../../../components/common.style';
import {Row} from 'react-bootstrap';
import BackgroundShape from '../../../assets/services-1-images/shape.png'

export const AboutSection = styled.section`
    padding:100px 0px;
    background:#f9fafc;
    position:relative;
    @media ${device.tablet} {
        padding:80px 10px 60px;
    }

    ::before{
        content:"";
        display: block;
        background-size: 100%;
        top:calc(50% - 150px);
        left:-50px;
        position: absolute;
        height: 300px;
        width: 300px;
        background-image:url(${BackgroundShape});

        @media ${device.tablet} {
            top:calc(30% - 150px);
            height: 300px;
            width: 300px;
        }
        @media ${device.mobileXL} {
            top:calc(20% - 125px);
            height: 250px;
            width: 250px;
        }

    }
`;

export const AboutInner = styled.div`
    
`;

export const AboutRow = styled(Row)`
    align-items:center;
    @media ${device.tablet} {
        :last-child{
            padding-bottom:0px;
        }
    }
`;

export const AboutRight = styled.div`
    position: relative;
    text-align:left;

    @media ${device.tablet} {
        text-align:right;
    }
`;

export const AboutRightImgHolder = styled.div`
    padding:0px 40px;

    @media ${device.laptop} {
        padding:0px 10px;
    }
`;

export const Img = styled.img`

`;

export const AboutLeft = styled.div`
    @media ${device.tablet} {
        text-align:left;
    }
`;

export const AboutLeftHeading = styled(SectionHeading)`
    text-align:left;
    margin-bottom:40px;
    
    @media ${device.tablet} {
        text-align:center;
        margin-top:40px;
    }
`;

export const AboutLeftPara = styled(Commonpara)`
    text-align:left;
    font-size:14px;
`;
