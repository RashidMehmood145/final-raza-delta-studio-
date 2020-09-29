import styled from 'styled-components';
import {device} from '../../../components/device';
import {Commonpara,SectionHeadingMultiLine,Commonbtn,
    Commonh4} from '../../../components/common.style';
import {Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AboutSection = styled.section`
    padding:100px 0px;
    background:#f9fafc;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const AboutInner = styled.div`
    
`;

export const AboutRowReverse = styled(Row)`
    flex-direction: row-reverse;

    @media ${device.tablet} {
        :last-child{
            padding-bottom:0px;
        }
    }
`;

export const AboutRight = styled.div`
    position: relative;
    text-align:right;

    @media ${device.tablet} {
        text-align:right;
    }

`;
export const AboutRightImgFirstHolder = styled.div`
    width: calc(100% - 100px);
    height: auto;
    box-shadow: 0px 0px 26px 5px #d0d0d0;
    position:relative;
    margin-left:70px;

    @media ${device.laptop} {
        width: calc(100% - 60px);
        margin-left:30px;
    }
    @media ${device.tablet} {
        width: calc(100% - 60px);
        margin-left:30px;
    }
`;

export const AboutRightImgSecondHolder = styled.div`
    position: absolute;
    top: 40px;
    right: 0px;
    margin-bottom:0px;
    max-width:40%;
    width:100%;
`;

export const AboutLeftImgThirdHolder = styled.div`
    position: absolute;
    bottom: 60px;
    left: 0px;
    margin-bottom:0px;
    max-width:50%;
    width:50%;
`;

export const AboutLeft = styled.div`
    @media ${device.tablet} {
        text-align:left;
    }
`;

export const AboutLeftHeading = styled(SectionHeadingMultiLine)`
    @media ${device.tablet} {
        margin-top:40px;
    }
`;

export const AboutLeftPara = styled(Commonpara)`
    text-align:left;
    font-size:14px;
`;

export const AboutBtn = styled(Commonbtn)`
    margin-top:10px;
`;

export const ListTextLayout = styled.div`

`;

export const MissionVisionHeading = styled(Commonh4)`
    font-size:28px;
    margin-bottom:10px;
    text-align:left;
    :before{
        content: "";
        border-radius: 100%;
        border: 3px solid #2560d4;
        width: 15px;
        height: 15px;
        display: inline-block;
        margin-right: 15px;
        position: relative;
        bottom: 1px;
    }

    @media ${device.laptop} {
        font-size:22px;
    }

`;

export const MissionVisionPara = styled(Commonpara)`
    text-align:left;
    font-size:14px;
    margin-left:33px;
`;

export const AboutRightImgFirst = styled.img``;
export const AboutRightImgSecond = styled.img``;
export const AboutLeftImgThird = styled.img``;
