import styled from 'styled-components';
import {Commonbtn,Commonh4} from '../../../components/common.style';
import BackgroundImg from '../../../assets/services-2-images/banner-cta.jpg'
import {device} from '../../../components/device';

export const CTABannerSection = styled.section`
    padding:130px 0px;
    background-image:url(${BackgroundImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @media ${device.tablet} {
        padding:100px 10px;
    }
`;

export const TextBtnLayout = styled.div`
    text-align:center;
`;

export const BannerText = styled(Commonh4)`
    color:#fff;
    text-align:center;
    font-size:50px;
    line-height:55px;
    margin:0px auto 30px;
    max-width:750px;

    @media ${device.tablet} {
        font-size:45px;
        line-height:50px;
    }
    @media ${device.mobileXL} {
        font-size:40px;
        line-height:45px;
    }
    @media ${device.mobileM} {
        font-size:35px;
        line-height:40px;
    }
`;

export const BannerBtn = styled(Commonbtn)`
    box-shadow:none;
`;