import styled from 'styled-components';
import {device} from '../../../components/device';
import {Commonpara,Commonh4} from '../../../components/common.style';

export const ContactDetailsSection = styled.section`
    padding:100px 0px;

    @media ${device.tablet} {
        padding:80px 10px 50px;
    }

`;
export const ContactDetailsLayout = styled.div`

`;
export const ContactLayout = styled.div`
    display:flex;
    align-items: flex-start;

    @media ${device.tablet} {
        margin-bottom:30px;
    }
`;
export const ContactIcon = styled.img`
    width:50px;
    flex-shrink:0;
`;
export const ContactTextLayout = styled.div`
    margin-left:10px;
`;
export const ContactHeading = styled(Commonh4)`
    font-size:26px;
    text-align:left;
    margin-bottom:10px;
`;
export const ContactText = styled(Commonpara)`
    margin-bottom:0px;
`;


