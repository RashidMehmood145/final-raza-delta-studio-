import React,{Component} from "react";
import {NavbarCustom,NavbarToggleCustom,BrandLogo,NavLinkCustom,NavDropdownCustom,
    NavDropdownItemCustom} from "./headermenubs.style"
import {
    Container,Nav,Navbar
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../../pagedata/HeaderFooter';

class Headermenu extends Component{
    constructor(props){
        super(props);
        this.state = { 
            stickyClass:'top',
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', () => {
            let stickyClass = 'topSticky';
            let scrollPos = window.scrollY;

            if(scrollPos < 100){
                stickyClass = 'top';
            }

            if(this.state.stickyClass !== stickyClass)
            {
                this.setState({ stickyClass });
            }
                
        });
    }

    componentWillUnmount() { 
        window.removeEventListener('scroll'); 
    } 

    render(){
        return(
            <NavbarCustom 
                expand="lg" fixed="top" 
                isSticky={this.state.stickyClass==="topSticky"?true:false}>
                <Container>
                    <Navbar.Brand href="/">
                        <BrandLogo src={this.state.stickyClass==="topSticky"?require("../../assets/"+Header.BrandLogoSticky):require("../../assets/"+Header.BrandLogo)}
                        isSticky={this.state.stickyClass==="topSticky"?true:false}
                        alt="Logo"
                        />
                    </Navbar.Brand>

                    <NavbarToggleCustom
                    isSticky={this.state.stickyClass==="topSticky"?true:false}
                    aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        {
                            Header.MenuItems.map((menuItem, idx)=>{
                                return menuItem.Type === "dropdown" 
                                ? 
                                <NavDropdownCustom title={menuItem.Menu} id="basic-nav-dropdown"
                                    isSticky={this.state.stickyClass==="topSticky"?true:false}>
                                    {
                                        menuItem.Items.map((menuSubItem,subItemIdx)=>{
                                            return <NavDropdownItemCustom href={menuSubItem.Href}>{menuSubItem.MenuSubItem}</NavDropdownItemCustom>
                                        })
                                    }
                                </NavDropdownCustom>
                                :
                                <NavLinkCustom href={menuItem.id} 
                                isSticky={this.state.stickyClass==="topSticky"?true:false}>{menuItem.Menu}</NavLinkCustom>
                                
                            })
                        }
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </NavbarCustom>
            
        );
    }
}

export default Headermenu;