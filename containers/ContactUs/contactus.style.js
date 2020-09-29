import styled from 'styled-components';
import {Commonpara,SectionHeading} from '../../components/common.style';
import {Row} from 'react-bootstrap';
import {device} from '../../components/device';
import BackgroundImg from '../../assets/contactus-images/contact-banner.jpg'

export const ContactUsSection = styled.section`
    padding:100px 0px;
    background-image:url(${BackgroundImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const ContactUsCustomRow = styled(Row)`
    align-items:center;
`;

export const ContactUsLeft = styled.div`
    margin-right:50px;
    @media ${device.laptop} {
        margin-right:0px;
    }
    @media ${device.tablet} {
        margin-right:0px;
        margin-bottom:40px;
    }
`;

export const ContactUsLeftHeading = styled(SectionHeading)`
    text-align:left;
    font-size: 70px;
    line-height:70px;
    margin-bottom:40px;
    color:#fff;

    @media ${device.laptopM} {
        font-size: 60px;
        line-height:60px;
    }
    @media ${device.laptop} {
        font-size: 50px;
        line-height:50px;
    }
    @media ${device.tablet} {
        font-size: 60px;
        line-height:60px;
    }
    @media ${device.mobileXL} {
        font-size: 55px;
        line-height:55px;
    }
    @media ${device.mobileL} {
        font-size: 50px;
        line-height:50px;
    }
`;

export const ContactUsLeftPara = styled(Commonpara)`
    color:#fff;
`;

export const ContactUsRight = styled.div`
    margin-left:50px;
    padding:40px;
    background:#fff;
    border-radius:10px;

    @media ${device.laptop} {
        margin-left:0px;
        padding:30px;
    }
    @media ${device.tablet} {
        margin-left:0px;
        padding:20px;
    }
`;
export const Form = styled.form`
    margin-bottom:0px;
`;

export const FormGroup = styled.div`
    margin-bottom:30px;

    .react-datepicker-wrapper{
        width:100%;
    }
`;

export const NameInput = styled.input`
    width: 100%;
    outline:0;
    background:#f7f7f7;
    padding: 10px 20px;
    border: none;
    border-radius:2px;
    font-size:14px;
    ::placeholder
    {
        font-size:14px;
    }
`;

export const ContactUsSpanErr = styled.span`
    color:red;
    font-size:14px;
`;

export const TextareaMsg = styled.textarea`
    width: 100%;
    outline:0;
    border-radius:2px;
    padding: 10px 20px;
    background:#f7f7f7;
    font-size:14px;
    border: none;
    height:150px;
    ::placeholder{
        font-size:14px;
    }
`;

export const ContactUsSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;

export const ContactButton = styled.button`
    border:none;
    width:100%;
    color:#fff;
    background:#2560d4;
    padding:12px;
    margin-bottom:0px;

    :hover{
        background:#333;
    }
`;