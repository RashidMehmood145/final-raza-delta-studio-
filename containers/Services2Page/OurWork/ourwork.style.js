import styled from 'styled-components';
import {SectionHeading} from '../../../components/common.style';
import {device} from '../../../components/device';

export const OurWorkSection = styled.section`
    padding:100px 0px;

    @media ${device.tablet} {
        padding:80px 10px 40px;
    }
`;

export const HeadingLayout = styled.div`

`;

export const OurWorkHeading = styled(SectionHeading)`
    margin-bottom:75px;

    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const ImageHolder = styled.div`
    width:100%;
    @media ${device.tablet} {
        margin-bottom:40px;
    }
`;




