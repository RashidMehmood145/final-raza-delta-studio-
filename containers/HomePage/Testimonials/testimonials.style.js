import styled from 'styled-components';
import {SectionHeading,Commonh4,Commonpara} from '../../../components/common.style';
import {QuoteLeft} from 'styled-icons/fa-solid/QuoteLeft';
import {device} from '../../../components/device';

export const TestimonailSection = styled.section`
    padding:100px 0px;

    @media ${device.laptop} {
        padding:100px 0px 80px;
    }
    @media ${device.tablet} {
        padding:80px 10px 60px;
    }
`;

export const TestimonailsLayout = styled.div`
    text-align:center;
`;

export const HeadingLayout = styled.div`
`;

export const TestimonialHeading = styled(SectionHeading)`
    margin-bottom:75px;

    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const TestimonialLayout = styled.div`
    background:#fff;
    box-shadow: 0px 0px 16px 0px #d0d0d0;
    padding:40px 30px;

    @media ${device.laptop} {
        margin-bottom:20px;
    }
`;

export const AuthorImageHolder = styled.div`
    width:60px;
    height:60px;
    margin:0px auto 10px;
    border-radius:100%;

`;

export const LeftQuote = styled(QuoteLeft)`
    width: 40px;
    color:#2560d4cc;
    margin-bottom:10px;
`;

export const TestimonialText = styled(Commonpara)`
    margin-bottom:30px;
`;

export const TestimonialAuthor = styled(Commonh4)`
    margin-bottom:10px;
`;

export const AuthorDesignation = styled(Commonpara)`
    margin-bottom:0px;
`;

export const Img = styled.img`
    border-radius:100%;
`;

