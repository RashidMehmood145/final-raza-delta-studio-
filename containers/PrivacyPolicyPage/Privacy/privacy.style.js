import styled from 'styled-components';
import {Commonpara,Commonh3,Commonh4} from '../../../components/common.style';
import {device} from '../../../components/device';

export const PrivacySection = styled.section`
    padding:100px 0px;
    border-bottom:1px solid #ccc;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;
export const PrivacyBlockLayout = styled.div`
    background:#fafafa;
    padding:30px;
    margin-bottom:20px;

    :last-child{
        margin-bottom:0px;
    }
`;
export const BlockHeading = styled(Commonh3)`
    text-align:left;
    font-size:30px;
    margin-bottom:20px;
`;
export const BlockSubHeading = styled(Commonh4)`
    text-align:left;
    font-size:22px;
    font-weight:500;
    line-height:22px;
    margin-bottom:10px;
`;
export const PrivacyText = styled(Commonpara)`

`;

