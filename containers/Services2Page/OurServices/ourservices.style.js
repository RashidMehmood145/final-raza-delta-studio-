import styled from 'styled-components';
import {Commonpara,Commonh4,SectionHeading} from '../../../components/common.style';
import BackgroundImg from '../../../assets/services-2-images/banner-2.jpg'
import {device} from '../../../components/device';

export const OurServicesSection = styled.section`
    padding:100px 0px 70px;
    background-image:url(${BackgroundImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @media ${device.tablet} {
        padding:80px 10px 50px;
    }
`;

export const HeadingLayout = styled.div`
    margin-bottom:75px;
    
    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const OurServicesHeading = styled(SectionHeading)`
    color:#fff;
`;

export const OurServicesSingleLayout = styled.div`
    margin-bottom:30px;
`;

export const ImageHolder = styled.div`
    width:140px;
    flex-shrink:0;
`;

export const OurServicesImage = styled.img`
    width:50px;
    height:50px;
    margin-bottom:20px;
`;

export const TextLayout = styled.div`
`;

export const SubHeading = styled(Commonh4)`
    text-align:left;
    font-size:24px;
    line-height:24px;
    margin-bottom:20px;
    color:#fff;
`;

export const Content = styled(Commonpara)`
    margin-bottom:0px;
    color:#fff;
`;
