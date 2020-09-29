import styled from 'styled-components';
import {Commonh4,Commonpara} from '../../components/common.style';
import {SocialFacebook} from 'styled-icons/typicons/SocialFacebook'
import {SocialTwitter} from 'styled-icons/typicons/SocialTwitter'
import {SocialLinkedin} from 'styled-icons/typicons/SocialLinkedin'
import {SocialPinterest} from 'styled-icons/typicons/SocialPinterest'
import {device} from '../../components/device';
import {Phone} from 'styled-icons/boxicons-solid/Phone'
import {Mail} from 'styled-icons/material/Mail'

export const FooterSection = styled.footer`
    width:100%;
    background:#2F41CD;
    padding:60px 0px 0px;
    border-bottom:1px solid #ebebeb;

    @media ${device.tablet} {
        padding-right:10px;
        padding-left: 10px;
    }
`;
export const IconTextLayout = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:10px;
`;

export const PhoneEmailText = styled(Commonpara)`
    margin-bottom:0px;
    color:#fff;
    line-height:14px;
    margin-left:10px;
`;

export const PhoneIcon = styled(Phone)`
    width:25px;
    height:25px;
    flex-shrink:0;
    color:#fff;
`;

export const EmailIcon = styled(Mail)`
    width:25px;
    flex-shrink:0;
    color:#fff;
`;

export const FooterCol = styled.div`
    padding:20px 0px;
`;

export const FooterLogo = styled.img`
    max-width: 150px;
    margin-bottom: 20px;
`;

export const FooterTitle = styled(Commonh4)`
    color:#fff;
    font-size:26px;
    margin-bottom:25px;
    text-align:left;
`;

export const FooterPara = styled(Commonpara)`
    color:#fff;
    font-size:14px;
    margin-bottom:15px;
`;

export const FooterUl = styled.ul`
    padding-left:0px;
    margin-left:0px;
`;

export const FooterLi = styled.li`
    list-style:none;
    margin-bottom:6px;
`;

export const FooterMenu = styled.a`
    color:#fff;
    text-decoration:none;
    font-size:14px;
    :hover
    {
        color:#fff;
        text-decoration:underline;
    }
`;
export const SocialLayout = styled.div`
    text-align:right;

    @media ${device.tablet} {
        text-align:center;
    }
`;

export const FooterSocial = styled.a`
`;

export const PinterestIcon = styled(SocialPinterest)`
    width: 40px;
    color: #fff;
    border-radius:100%;
    padding: 6px;
    margin: 10px 5px 10px;
    transition:all .5s;
    :hover{
        border:2px solid #fff;
    }
`;
export const LinkedinIcon = styled(SocialLinkedin)`
    width: 40px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 10px;
    transition:all .5s;
    :hover{
        border:2px solid #fff;
    }
`;
export const TwitterIcon = styled(SocialTwitter)`
    width: 40px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 10px;
    transition:all .5s;
    :hover{
        border:2px solid #fff;
    }
`;
export const FbIcon = styled(SocialFacebook)`
    width: 40px;
    color: #fff;
    padding: 6px;
    border-radius:100%;
    margin: 10px 5px 10px;
    transition:all .5s;
    :hover{
        border:2px solid #fff;
    }
`;
export const BottomFooterWrapper = styled.section`
    width:100%;
    background:#2F41CD;

    .row{
        align-items:center;
    }
`;

export const BottomFooterPara = styled.p`
    color:#fff;
    margin-bottom:0px;
    padding:10px 0px;   
    font-size:15px;

    @media ${device.tablet} {
        text-align:center;
    }
`;

export const BottomLink = styled.a`
    color:#fff;
    :hover{
        color:#fff;
    }
`;
