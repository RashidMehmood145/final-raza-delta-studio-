import styled from 'styled-components';
import {Commonpara,Commonh3,CommonbtnBanner} from '../../../components/common.style';
import {device} from '../../../components/device';
// import BackgroundImg from '../../../assets/home-images/banner.jpg'

export const BannerSection = styled.section`
    // padding:70px 0px;
    // background-size: cover;
    // background-position: center center;
    // background-repeat: no-repeat;
    min-height:100vh;
`;

export const BannerWrapper = styled.div`

    .slick-list{
        line-height:0;
    }
    .slick-dots{
        height:100%;
        display:flex;
        align-items:center;

        @media ${device.mobileXL} {
            height:auto;
            display:block;
            left:0;
            right:0;
        }
    }
    .slick-active{
        z-index:999;
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
        margin-left:20px;

        @media ${device.mobileXL} {
            margin:20px 0px;
        }
    }
`;
export const BannerSlide = styled.div`
    position:relative;
`;

export const BannerImageHolder = styled.div`
    position:relative;
    width:100%;
    min-height:90vh;
`;

export const BannerImage = styled.img`
    width:100%;
    min-height:90vh;
`;

export const BannerContents = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    height:100%;
    display:flex;
    align-items:center;
    line-height:1.5;
    max-width:750px;
    margin:50px auto 0px;
    
    @media ${device.laptop} {
        max-width:600px;
    }
    @media ${device.tablet} {
        max-width:500px;
        margin:30px auto 0px; 
    }
    @media ${device.mobileXL} {
        max-width:400px;
    }
`;

export const BannerContentLeft = styled.div`
    max-width:900px;
    margin:auto;
    padding:25px;
    text-align:center;

    @media ${device.laptop} {
        width:100%;
        padding: 10px;
    }
`;

export const BannerH3 = styled(Commonh3)`
    font-size:50px;
    font-weight:700;
    max-width:700px;
    margin:0px auto 20px;
    line-height: 60px;
    color:#fff;
    text-align:center;
    
    @media ${device.tablet} {
        width:100%;
        font-size: 32px;
        line-height:34px;
    }
`;

export const BannerH4 = styled(Commonpara)`
    font-size:18px;
    margin-bottom:30px;
    color:#fff;
    text-align:center;
`;

export const BannerBtn = styled(CommonbtnBanner)`
    text-transform:uppercase;
    box-shadow:none;
    background:transparent;
    border:1px solid #fff;
    :hover{
        background:#fff;
        color:#333;
    }
`;
