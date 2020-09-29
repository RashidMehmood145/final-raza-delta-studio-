import styled from 'styled-components';
import {device} from './device';

export const Commonbtn = styled.a`
    font-size:14px;
    color: #fff !important;
    background:#2560d4;
    padding: 12px 40px;
    text-decoration:none;
    font-weight:bold;
    display: inline-block;
    box-shadow: 0px 0px 13px -2px #5ce59b;
    cursor:pointer;
    
    :hover{
        text-decoration:none;
        color: #fff !important;
        background:#333 !important;
    }
`;

export const CommonbtnBanner = styled.a`
    font-size:14px;
    color: #fff !important;
    background:#2560d4;
    padding: 12px 40px;
    text-decoration:none;
    font-weight:bold;
    display: inline-block;
    line-height:1.5;
    box-shadow: 0px 0px 13px -2px #5ce59b;
    
    :hover{
        text-decoration:none;
        color: #333 !important;
    }
`;

export const SectionHeading = styled.h3`
    font-size:42px;
    color:#262626;
    margin-bottom:30px;
    text-align:center;
    line-height:42px;
    font-weight: 700;

    @media ${device.tablet} {
        font-size:40px;
        line-height:40px;
    }

    @media ${device.mobileXL} {
        font-size:36px;
        line-height:36px;
    }
`;


export const SectionHeadingMultiLine = styled.h3`
    font-size:42px;
    color:#262626;
    margin-bottom:30px;
    text-align:left;
    line-height:46px;
    font-weight: 700;

    @media ${device.laptopM} {
        font-size:40px;
        line-height:44px;
    }
    @media ${device.laptop} {
        font-size:28px;
        line-height:32px;
    }
    @media ${device.tablet} {
        font-size:34px;
        line-height:38px;
    }
    @media ${device.mobileXL} {
        font-size:32px;
        line-height:36px;
    }
    @media ${device.mobileL} {
        font-size:28px;
        line-height:32px;
    }
`;

export const Commonh3 = styled.h3`
    font-size: 36px;
    margin-bottom: 15px;
    color:#262626;
    font-weight: 700;
`;

export const Commonh4 = styled.h4`
    font-size:30px;
    color:#3a3a3a;
    line-height:30px;
    text-align:center;
    margin-bottom:20px;
    font-weight:700;
`;

export const Commonpara = styled.p`
    color:#494949;
    margin-bottom:20px;
    font-size:14px;
`;

export const AnchorLink = styled.a`
    color:#111;
    font-family: 'PT Serif', serif;
    font-weight:700;
    font-size:16px;
    line-height:20px;
    text-align:left;
    
    :hover{
        color:#111;
    }
`;