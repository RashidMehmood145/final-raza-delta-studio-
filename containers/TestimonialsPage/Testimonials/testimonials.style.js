import styled from 'styled-components';
import {Commonpara, Commonh4} from '../../../components/common.style';
import {QuoteLeft} from 'styled-icons/fa-solid/QuoteLeft';
import {device} from '../../../components/device';

export const TestimonialsSection = styled.section`
    //Top Padding: 100 + Half of Image Height
    //Bottom Padding: 100 - TestimonialsSingleLayout Bottom Margin
    padding:140px 0px 40px; 
    background:#fafafa;

    @media ${device.tablet} {
        padding:120px 10px 20px;
    }
`;

export const DesktopLayout = styled.div`
    display:block;
    @media ${device.tablet} {
        display:none;
    }
`;

export const MobileLayout = styled.div`
    display:none;
    @media ${device.tablet} {
        display:block;
    }
`;
export const TestimonialsSingleLayout = styled.div`
    background:#fff;
    position:relative;
    margin-bottom:60px;
    box-shadow: 0px 0px 16px 0px #d0d0d0;
`;

export const ImageHolder = styled.div`
    width:80px;
    height:80px;
    margin-left:30px;
    position:absolute;
    top:-40px;

`;

export const AuthorLayout = styled.div`
    display:flex;
    //Top Padding = 20px + Half of Image Height(40px)
    padding:60px 30px 20px;
    justify-content: space-between;
`;

export const Author = styled.div`
    
`;

export const AuthorName = styled(Commonh4)`
    text-align:left;
    margin-bottom:10px;
`;

export const Designation = styled(Commonpara)`
    margin-bottom:0px;
`;

export const QuotesHolder = styled.div`

`;

export const TestimonialsText = styled(Commonpara)`
    padding:0px 30px 30px;
`;

export const QuotesIcon = styled(QuoteLeft)`
    width: 40px;
    color:#2560d4cc;
    margin-bottom:10px;
`;

export const Img =  styled.img`
    border-radius:100%;
    margin-bottom:-30px;
    border:3px solid #fff;
`;