import styled from 'styled-components';
import {device} from '../../../components/device';
import {SectionHeading,Commonh4,Commonpara} from '../../../components/common.style';
import BackgroundImg from '../../../assets/home-images/banner-small.jpg'

export const OurStatsSection = styled.section`
    padding:100px 0px;
    background-image:url(${BackgroundImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @media ${device.laptop} {
        padding:80px 10px 40px;
    }
`;

export const OurStatsLayout = styled.div`
    
`;

export const HeadingLayout = styled.div`
`;

export const OurProjectsHeading = styled(SectionHeading)`
    margin-bottom:75px;
    color:#fff;

    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const SingleStatLayout = styled.div`
    text-align:center;

    @media ${device.laptop} {
        margin-bottom:40px;
    }
`;

export const StatImage = styled.img`
    width:80px;
    margin-bottom:20px;
    
`;

export const StatHeading = styled(Commonh4)`
    text-align:center;
    font-size:45px;
    line-height:50px;
    margin-bottom:10px;
    color:#fff;
`;

export const StatPara = styled(Commonpara)`
    text-align:center;
    font-size:18px;
    color:#fff;
`;
