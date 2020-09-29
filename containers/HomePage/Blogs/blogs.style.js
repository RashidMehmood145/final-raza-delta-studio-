import styled from 'styled-components';
import {device} from '../../../components/device';
import {SectionHeading,Commonbtn,Commonpara, Commonh4} from '../../../components/common.style';

export const BlogSection = styled.section`
    padding:100px 0px;
    background:#fafafa;

    @media ${device.tablet} {
        padding:80px 10px 40px;
    }
`;

export const HeadingLayout = styled.div`
`;

export const BlogHeading = styled(SectionHeading)`
    margin-bottom:75px;
    color:#111;

    @media ${device.tablet} {
        margin-bottom:60px;
    }
`;

export const BlogLayout = styled.div`
    text-align:center;
`;

export const BlogSingleLayout = styled.div`
    @media ${device.tablet} {
        margin-bottom:40px;
    }
`;

export const BlogTitle = styled(Commonh4)`
    font-size:26px;
    line-height:30px;
    margin-top:20px;
`;

export const BlogText = styled(Commonpara)`
    text-align:center;
`;

export const ReadMoreBtn = styled(Commonbtn)``;

export const BlogImg = styled.img``;
