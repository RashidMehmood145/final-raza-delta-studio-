import styled from 'styled-components';
import {Commonh3} from '../../components/common.style';
import {device} from '../../components/device';

export const BannerSection = styled.section`
    background-image:url(${props => require("../../assets/"+props.BackgroundImg)});
    padding:70px 0px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height:400px;
    display:flex;
    align-items:center;

    @media ${device.tablet} {
        background-size:cover;
        padding:80px 0px;
    }
`;

export const BannerContents = styled.div`
    padding-top:70px;

    @media ${device.tablet} {
        display:block;
        padding-top:40px;
    }
    
`;

export const BannerContentLeft = styled.div`
    max-width:900px;
    margin:auto;
    padding:20px;
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
    line-height: 50px;
    color:#fff;
    text-align:center;
    
    @media ${device.tablet} {
        width:100%;
        font-size: 40px;
        line-height:44px;
    }

    @media ${device.mobileXL} {
        width:100%;
        font-size: 36px;
        line-height:40px;
    }
`;
export const BreadCrumbsLayout = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
`;

export const BreadCrumbs = styled.a`
    font-size:16px;
    color:#fff;
    margin:0px 20px;
    text-align:center;

    :hover{
        color:#fff;
    }
`;

export const Divider = styled.div`
    height:20px;
    width:1px;
    background:#fff;
`;
