import styled from 'styled-components';
import {Commonpara,Commonh4,SectionHeading} from '../../../components/common.style';
import {device} from '../../../components/device';

export const ServicesWeProvideSection = styled.section`
    padding:100px 0px;
    background:#fafafa;

    @media ${device.tablet} {
        padding:80px 10px;
    }
`;

export const ServicesLayout = styled.div`
    padding-right:20px;
`;

export const HeadingLayout = styled.div`
    margin-bottom:40px;
`;

export const ServicesWeProvideHeading = styled(SectionHeading)`
    text-align:left;
`;

export const ServicesSingleLayout = styled.div`
    margin-bottom:40px;
`;

export const ServiceImg = styled.img`
    width:60px;
    margin-bottom:20px;
`;

export const ServiceHeading = styled(Commonh4)`
    font-size:26px;
    text-align:left;
    margin-bottom:20px;
`;

export const ServiceText = styled(Commonpara)`
    text-align:left;
`;

export const RightImageHolder = styled.div`
`;

export const RightImage = styled.img`
    min-height:520px;
    width:100%;
    object-fit:cover;
    
    @media ${device.laptop} {
        height:300px;
    }
`;
