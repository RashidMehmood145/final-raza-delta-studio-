import styled from 'styled-components';
import {device} from '../../../components/device';
import {Commonpara,Commonh4,SectionHeading} from '../../../components/common.style';

export const WhyChooseUsSection = styled.section`
    display:flex;
    align-items:center;

    @media ${device.laptop} {
        flex-direction:column;
    }

    @media ${device.minlaptopL} {
        max-width:1140px;
        margin:auto;
    }
`;

export const WhyChooseUsLeftLayout = styled.div`
    width:50%;
    padding-left:50px;
    padding-right:15px;

    @media ${device.laptopL} {
        margin-right: calc(50% - 570px);
    }

    @media ${device.laptopM} {
        margin-right: calc(50% - 480px);
    }

    @media ${device.laptop} {
        width:100%;
        max-width: 720px;
        margin:0px auto;
        padding: 40px 25px;
    }

    @media ${device.tablet} {
        width:100%;
        max-width: 540px;
        margin:0px auto;
        padding: 40px 25px;
    }
`;

export const WhyChooseUsHeading = styled(SectionHeading)`
    text-align:left;
    margin-bottom:20px;

    @media ${device.laptop} {
    }
`;

export const WhyChooseUsSingle = styled.div`
    padding-top:20px;
    display:flex;
    border-bottom: 1px solid #ccc;

    :last-child{
        border-bottom: none;
    }
`;

export const NumberLayout = styled.div`
    position: relative;
`;

export const ImgIcon = styled.img`
    width:80px;
`;

export const TextLayout = styled.div`
    margin-left:20px;
`;

export const SubHeading = styled(Commonh4)`
    color:#3a3a3a;
    text-align:left;
    font-size:22px;
    line-height:22px;
    margin-bottom:15px;
`;

export const Content = styled(Commonpara)`
    text-align:left;
    margin-bottom:${props => props.marginBottom?"20px":"0px"};
`;

export const WhyChooseUsRightLayout = styled.div`
    width:50%;
    flex-shrink:0;

    @media ${device.minlaptopL} {
        padding-left:15px;
    }

    @media ${device.laptop} {
        width:100%;
    }
`;

export const RightImage = styled.img`
    width:100%;
    object-fit:cover;
    @media ${device.laptopM} {
        min-height:560px;
    }
    @media ${device.laptop} {
        height:350px;
    }
    @media ${device.tablet} {
        height:300px;
    }
`;