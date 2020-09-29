import styled from 'styled-components';
import {SectionHeading} from '../../../components/common.style';
import {device} from '../../../components/device';

export const OurProjectsSection = styled.section`
    position:relative;
`;

export const OurProjectsOuterWrapper = styled.div`
    ::before{
        position:absolute;
        content:"";
        background:#000;
        height:100%;
        width:80%;
        left:0;
        top:0;
        z-index:-1;

        @media ${device.laptop} {
            width:75%;
        }
        @media ${device.tablet} {
            width:75%;
        }
        @media ${device.mobileXL} {
            width:80%;
        }
    }
`;
export const OurProjectsWrapper = styled.div`
    padding:100px 0px;
    @media ${device.tablet} {
        padding:80px 10px;
    }

`;

export const OurProjectsLayout = styled.div`
    
`;

export const HeadingLayout = styled.div`
`;

export const OurProjectsHeading = styled(SectionHeading)`
    margin-bottom:75px;
    text-align:left;
    color:#fff;

    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const SliderLayout = styled.div`
    position:relative;
    margin-left:60px;

    @media ${device.mobileXL} {
        margin-left:0px;
    }

    .slick-list{
        line-height:0;
    }

    .slick-dots{
        height:100%;
        display:flex;
        align-items:center;
        left:-60px;

        @media ${device.mobileXL} {
            height:auto;
            display:block;
            left:0;
            right:0;
        }
    }

    .slick-active span{
        background:#2560d4 !important;
        width:35px !important;

        @media ${device.mobileXL} {
            width:25px !important;
        }
    }

    li{
        display:block !important;
        width:25px !important;

        @media ${device.mobileXL} {
            display:inline-block !important;
        }
    }
    ul{
        margin-left:0px;

        @media ${device.mobileXL} {
            margin:20px 0px;
        }
    }
`;

export const SliderImg = styled.img``;


