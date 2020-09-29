import React from 'react';
import {AboutSection,AboutInner,
    AboutLeft,AboutRight,AboutLeftHeading,AboutLeftPara,
    AboutBtn,AboutRowReverse,MissionVisionPara,ListTextLayout,MissionVisionHeading,
    AboutRightImgFirstHolder,AboutRightImgSecondHolder,AboutLeftImgThirdHolder,
    AboutRightImgFirst,AboutRightImgSecond,AboutLeftImgThird
} from './about.style';
import {Container, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from '../../../pagedata/Home';
const AboutPage  = () => {
    return (
        <AboutSection id="whyChooseUs">
            <Container>
                <AboutInner>
                    <AboutRowReverse>
                        <Col md="6">
                                <AboutRight>
                                    <AboutRightImgFirstHolder>
                                    <AboutRightImgFirst 
                                        src={require("../../../assets/"+About.AboutRightImgFirst)} 
                                        alt=""
                                    />
                                    </AboutRightImgFirstHolder>
                                    {/* <AboutRightImgSecondHolder>
                                    <AboutRightImgSecond 
                                        src={require("../../../assets/"+About.AboutRightImgSecond)} 
                                        alt=""
                                    />
                                    </AboutRightImgSecondHolder> */}
                                    {/* <AboutLeftImgThirdHolder>
                                    <AboutLeftImgThird 
                                        src={require("../../../assets/"+About.AboutLeftImgThird)} 
                                        alt=""
                                    />
                                    </AboutLeftImgThirdHolder> */}
                                </AboutRight>
                        </Col>

                        <Col md="6">
                            <AboutLeft>
                                <AboutLeftHeading>
                                {About.AboutLeftHeading}
                                </AboutLeftHeading>
                                <AboutLeftPara>
                                {About.AboutLeftPara}
                                </AboutLeftPara>
                                <ListTextLayout>
                                    <MissionVisionHeading>{About.MissionVisionHeading1}</MissionVisionHeading>
                                    <MissionVisionPara>{About.MissionVisionPara1}</MissionVisionPara>
                                </ListTextLayout>
                                <ListTextLayout>
                                    <MissionVisionHeading>{About.MissionVisionHeading2}</MissionVisionHeading>
                                    <MissionVisionPara>{About.MissionVisionPara2}</MissionVisionPara>
                                </ListTextLayout>
                                <AboutBtn href="#">
                                {About.AboutBtn}
                                </AboutBtn>
                            </AboutLeft>
                        </Col>
                    </AboutRowReverse>
                </AboutInner>
            </Container>
        </AboutSection>
    );
}
export default AboutPage;