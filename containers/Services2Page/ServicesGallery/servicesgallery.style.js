import styled from 'styled-components';
import {SectionHeading} from '../../../components/common.style';
import {device} from '../../../components/device';

export const ServicesGallerySection = styled.section`
    padding:100px 0px 80px;

    @media ${device.tablet} {
        padding:80px 10px 60px;
    }

    .right.carousel-control-next, .left.carousel-control-prev {
        display: none;
    }

    .carousel-indicators{
       display:none;
    }
`;


export const HeadingLayout = styled.div`

`;

export const GalleryWrapper = styled.div`
   
`;

export const GalleryHeading = styled(SectionHeading)`
    margin-bottom:75px;

    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const ImageHolder = styled.div`
    margin-bottom:30px;
`;

export const NextPrev = styled.div`
    text-align:center;
    button{
        border:none;
        background:none;
        outline:none;
    }
`;

export const PrevImg = styled.img`
    margin:20px 0px;
    width: 40px;
    cursor:pointer;
    transition:all .4s;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;

export const NextImg = styled.img`
    margin:20px 0px;
    width: 40px;
    cursor:pointer;
    transition:all .4s;
    :hover
    {
        transform:scale(1.1);
        transition:all .4s;
    }
`;

export const Img =  styled.img`

`;


