import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {KeyServicesSection,HeadingLayout,OurServicesHeading,KeyServicesRight,
    Img,
    KeyServicesRightInnerRow,
    KeyServicesCol1,
    KeyServicesCol2,
    IconHeadingLayout,
    KeyServicesIcon,
    KeyServicesHeading,
    KeyServicesCustomContainer,
    KeyServicesDesc} from './keyservices.style'

import { KeyServices } from '../../../pagedata/Home';
const KeyServicesPage = () => {
  
    return (
        <KeyServicesSection id="servicesContainer">
            <Container>
                <Row>
                    <Col md="12">
                            <HeadingLayout>
                                <OurServicesHeading>{KeyServices.SectionHeading}</OurServicesHeading>
                            </HeadingLayout>
                    </Col>
                </Row>

                    <KeyServicesCustomContainer>
                        <KeyServicesRight>
                            <Col lg="4" md="12" sm="12">
                                <Img 
                                    src={require("../../../assets/"+KeyServices.KeyServicesLeftImage)} 
                                    alt=""
                                />
                            </Col>
                            <Col lg="8" md="12" sm="12">
                                <KeyServicesRightInnerRow>
                                    <Col md="6">
                                        <KeyServicesCol1>
                                            <IconHeadingLayout>
                                                <KeyServicesIcon src={require("../../../assets/"+KeyServices.KeyServicesCustomContainer[0].KeyServicesIcon)} alt=""/>
                                                <KeyServicesHeading>{KeyServices.KeyServicesCustomContainer[0].KeyServicesHeading}</KeyServicesHeading>
                                            </IconHeadingLayout>
                                            <KeyServicesDesc>{KeyServices.KeyServicesCustomContainer[0].KeyServicesDesc}</KeyServicesDesc>
                                        </KeyServicesCol1>
                                    </Col>
                                    <Col md="6">
                                        <KeyServicesCol2>
                                            <IconHeadingLayout>
                                                <KeyServicesIcon src={require("../../../assets/"+KeyServices.KeyServicesCustomContainer[1].KeyServicesIcon)} alt=""/>
                                                <KeyServicesHeading>{KeyServices.KeyServicesCustomContainer[1].KeyServicesHeading}</KeyServicesHeading>
                                                </IconHeadingLayout>
                                            <KeyServicesDesc>{KeyServices.KeyServicesCustomContainer[1].KeyServicesDesc}</KeyServicesDesc>
                                        </KeyServicesCol2>
                                    </Col>
                                    <Col md="6">
                                        <KeyServicesCol1>
                                            <IconHeadingLayout>
                                                <KeyServicesIcon src={require("../../../assets/"+KeyServices.KeyServicesCustomContainer[2].KeyServicesIcon)} alt=""/>
                                                <KeyServicesHeading>{KeyServices.KeyServicesCustomContainer[2].KeyServicesHeading}</KeyServicesHeading>
                                            </IconHeadingLayout>
                                            <KeyServicesDesc>{KeyServices.KeyServicesCustomContainer[2].KeyServicesDesc}</KeyServicesDesc>
                                        </KeyServicesCol1>
                                    </Col>
                                    <Col md="6">
                                        <KeyServicesCol2>
                                            <IconHeadingLayout>
                                                <KeyServicesIcon src={require("../../../assets/"+KeyServices.KeyServicesCustomContainer[3].KeyServicesIcon)} alt=""/>
                                                <KeyServicesHeading>{KeyServices.KeyServicesCustomContainer[3].KeyServicesHeading}</KeyServicesHeading>
                                            </IconHeadingLayout>
                                            <KeyServicesDesc>{KeyServices.KeyServicesCustomContainer[3].KeyServicesDesc}</KeyServicesDesc>
                                        </KeyServicesCol2>
                                    </Col>
                                </KeyServicesRightInnerRow>
                            </Col>
                        </KeyServicesRight>
                    </KeyServicesCustomContainer>
            </Container>
        </KeyServicesSection>
    );
}

export default KeyServicesPage;
