import styled from 'styled-components';
import {device} from '../../../components/device';
import {Commonpara,Commonh3} from '../../../components/common.style';

export const ContactFormSection = styled.section`
    background:#fafafa;
`;
export const ContactFormWrapper = styled.div`
    display:flex;
    align-items:center;

    @media ${device.minlaptopL} {
        max-width:1140px;
        margin:auto;
        padding-right:15px;
    }

    @media ${device.laptop} {
        flex-direction:column;
    }
    
`;
export const MapLayout = styled.div`
    width:50%;
    background:#345ea1;
    flex-shrink:0;

    @media ${device.laptop} {
        width:100%;
    }

    iframe{
        min-height:500px;
        margin-bottom:0px;
        
        @media ${device.laptop} {
            min-height:350px;
        }
    }
`;

export const FormLayout = styled.div`
    width:50%;
    padding:0px 15px 0px 40px;

    @media ${device.laptopL} {
        margin-right: calc(50% - 570px);
    }

    @media ${device.laptopM} {
        margin-right: calc(50% - 480px);
    }

    @media ${device.laptop} {
        width:100%;
        max-width: 720px;
        margin:auto;
        padding:40px 25px 80px;
    }

    @media ${device.tablet} {
        width:100%;
        max-width: 540px;
        margin:auto;
        padding:40px 25px 80px;
    }
`;
export const FormHeading = styled(Commonh3)`

`;
export const FormText = styled(Commonpara)`

`;
export const ContactForm = styled.div`
    
`;

export const  Form = styled.form`
    margin-bottom:0px;
`;
export const  FormGroup = styled.div`
    margin-bottom:20px;
`;
export const  InputText = styled.input`
    border: 1px solid #ccc;
    font-size: 14px;
    padding: 8px 10px;
    width: 100%;
`;
export const MessageTextarea = styled.textarea`
    border: 1px solid #ccc;
    font-size: 14px;
    padding: 8px 10px;
    width: 100%;
    min-height:100px;
`;
export const SubmitBtn = styled.button`
    font-size:14px;
    color: #fff !important;
    background:#2560d4;
    padding: 12px 40px;
    text-decoration:none;
    font-weight:bold;
    display: inline-block;
    box-shadow: 0px 0px 13px -2px #5ce59b;
    cursor:pointer;
    border:none;

    :hover{
        text-decoration:none;
        color: #fff !important;
        background:#333 !important;
    }
`;

export const TextCenter = styled.div`
    text-align:left;
`;

export const ContactFormSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;

export const ContactFormSpanErr = styled.span`
    color:red;
    font-size:14px;
`;



