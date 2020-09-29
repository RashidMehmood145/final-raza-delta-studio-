import styled from 'styled-components';
import {device} from '../../components/device'
import {
    NavDropdown,Nav,Navbar
} from 'react-bootstrap';

export const NavbarCustom = styled(Navbar)`
    background: ${props => props.isSticky?"#ffffff":"#ffffff00"} !important;
    padding:0px !important;
    box-shadow: ${props => props.isSticky?"0px 1px 11px -1px #d6d6d6":"none"};

    @media ${device.laptop} {
        .navbar-collapse{
            background:#fff !important;
            padding:10px !important;
        }
    }
    @media ${device.mobileXL} {
        padding-left:15px !important;
        padding-right:15px !important;
    }
`;

export const BrandLogo = styled.img`
    margin-bottom:0px;
    max-width:${props => props.isSticky?"140px":"175px"};
    transition:all .5s;
    
    @media ${device.mobileM} {
        max-width:145px;
    }
`;

export const NavbarToggleCustom = styled(Navbar.Toggle)`
    border-color:${props => props.isSticky?"rgba(0,0,0,.1)":"rgba(255,255,255,.1)"} !important;
    .navbar-toggler-icon{
    background-image:url("${props => props.isSticky?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.9)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e"}") !important;
    }
`;

export const NavLinkCustom = styled(Nav.Link)`
    padding:15px 20px !important;
    color: ${props => props.isSticky?"#494949":"#ffffff"} !important;

    @media ${device.laptop} {
        color:#494949 !important;
    }
`;

export const NavDropdownCustom = styled(NavDropdown)`
    .nav-link{
        padding:15px 20px !important;
        color: ${props => props.isSticky?"#494949":"#ffffff"} !important;
    }

    .dropdown-menu{
        background-clip: unset  !important;
        border: none  !important;
        border-radius: 0px  !important;
        box-shadow: 0px 0px 5px 0px #d0d0d0;
    }

    @media ${device.laptop} {

        .nav-link{
            color:#494949 !important;
        }

        .dropdown-menu{
            box-shadow: none !important;
            padding-left: 15px !important;
            background: #f5f5f5 !important;
        }
    }
`;

export const NavDropdownItemCustom = styled(NavDropdown.Item)`
    padding: 10px 20px !important;

    :hover{
        background:#eee !important;
    }
`;