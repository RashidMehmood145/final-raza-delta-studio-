import styled from 'styled-components';
import {Commonbtn} from '../../components/common.style';
import {device} from '../../components/device';

export const SitemapSection = styled.section`
    padding:100px 0px 80px;
    background:#f9f9f9;

    @media ${device.tablet} {
        padding:80px 0px 60px;
    }
`;

export const SitemapAnchor = styled(Commonbtn)`
    margin-bottom:0px;
    display:block;
    text-align:center;
    margin-bottom:20px;
    text-transform:uppercase;
`;