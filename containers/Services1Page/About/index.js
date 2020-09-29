import React from 'react';
import {AboutSection,AboutInner,
    AboutLeft,AboutRight,AboutLeftHeading,AboutLeftPara,AboutRightImgHolder,Img,
    AboutRow
} from './about.style';
import {Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from '../../../pagedata/Services1';

const AboutPage  = () => {
    return (
        <AboutSection id="AboutContainer">
            <Container>
                <AboutInner>
                    <AboutRow>
                        <Col md="6">
                            <AboutRight>
                                <AboutRightImgHolder>
                                    <Img 
                                        src={require("../../../assets/"+About.AboutRightImg)} 
                                        alt=""
                                    />
                                </AboutRightImgHolder>
                            </AboutRight>
                        </Col>

                        <Col md="6">
                            <AboutLeft>
                                <AboutLeftHeading>
                                {About.AboutLeftHeading}
                                </AboutLeftHeading>
                                <AboutLeftPara>
                                {About.AboutLeftPara1}
                                </AboutLeftPara>
                                <AboutLeftPara>
                                {About.AboutLeftPara2}
                                </AboutLeftPara>
                            </AboutLeft>
                        </Col>
                    </AboutRow>
                </AboutInner>
            </Container>
        </AboutSection>
    );
}
export default AboutPage;