import styled from 'styled-components';
import {device} from '../../components/device';

export const ContactFooterFormSection = styled.section`
`;
export const ContactFooterFormWrapper = styled.div`
    display:flex;

    @media ${device.tablet} {
        display:block;
    }
`;
export const FormLayout = styled.div`
  
`;

export const ContactFooterForm = styled.div`

`;

export const  Form = styled.form`

`;
export const  FormGroup = styled.div`
    margin-bottom:12px;
`;
export const  InputText = styled.input`
    border: none;
    background:#f7f7f7;
    font-size: 14px;
    padding: 8px 10px;
    width: 100%;
`;
export const MessageTextarea = styled.textarea`
    border: none;
    background:#f7f7f7;
    font-size: 14px;
    padding: 8px 10px;
    width: 100%;
    min-height:100px;
`;
export const SubmitBtn = styled.button`
    border:none;
    width:100%;
    color:#fff;
    background:transparent;
    border:1px solid #fff;
    padding:8px;
    margin-bottom:0px;
    font-size:16px;

    :hover{
        background:#fff;
        color:#333;
    }
`;

export const TextCenter = styled.div`
    text-align:left;
`;


export const ContactUsSpanSuccess = styled.span`
    color:green;
    font-size:14px;
`;

export const ContactUsSpanErr = styled.span`
    color:red;
    font-size:14px;
`;



