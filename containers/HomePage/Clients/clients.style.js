import styled from 'styled-components';
import {device} from '../../../components/device';

export const ClientSection = styled.section`
    padding:100px 0px;

    @media ${device.laptop} {
        padding:80px 10px;
    }
`;

export const ClientLogoLayout = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
`;

export const ClientLogoHolder = styled.div`
    width:20%;
    text-align:center;

    @media ${device.laptop} {
        width:50%;
        margin-bottom:30px;

        :last-child{
            width:100%;
        }
    }

    :last-child{
        margin-bottom:0px;
    }
`;

export const ClientLogo = styled.div`
    width:120px;
    margin:0px auto;
`;

export const Img = styled.img``;