import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FooterSection,FooterCol,FooterLogo,FooterTitle,FooterPara,IconTextLayout,PhoneIcon,
    EmailIcon,PhoneEmailText,FbIcon,TwitterIcon,LinkedinIcon,
    PinterestIcon,FooterUl,FooterLi,FooterMenu,FooterSocial,BottomFooterPara,SocialLayout,
    BottomFooterWrapper,BottomLink} from './footer.style';
import ContactFormFooter from "../ContactFormFooter";
import { Footer } from '../../pagedata/HeaderFooter';


const FooterPage = () =>{
    return (
            <div>
            <FooterSection>
                <Container>
                    <Row >
                        <Col md={3} lg="3">
                            <FooterCol>
                                <FooterLogo src={require("../../assets/"+Footer.FooterCol1.FooterLogo)} alt=""/>
                                <FooterPara>
                                    {Footer.FooterCol1.FooterPara}
                                </FooterPara>
                                <IconTextLayout>
                                    <PhoneIcon />
                                    <PhoneEmailText>{Footer.FooterCol1.Phone}</PhoneEmailText>
                                </IconTextLayout>
                                <IconTextLayout>
                                    <EmailIcon />
                                    <PhoneEmailText>{Footer.FooterCol1.Email}</PhoneEmailText>
                                </IconTextLayout>
                            </FooterCol>
                        </Col>
                      
                        <Col md={3} lg="3" className="mt-2">
                            <FooterCol className="text-center">
                             
                            </FooterCol>
                        </Col>
                       
                        <Col md={3} lg="3">
                            <FooterCol>
                                <FooterTitle>{Footer.FooterCol4.FooterTitle}</FooterTitle>
                                <ContactFormFooter />
                            </FooterCol>
                        </Col>
                    </Row>
                </Container>
            </FooterSection>
          
            </div>
        )
                    }

export default FooterPage;