import React from 'react';
import {OurServicesSection,HeadingLayout,OurServicesHeading,OurServicesSingleLayout,
    ImageHolder,OurServicesImage,TextLayout,SubHeading,Content
} from './ourservices.style';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OurServices } from '../../../pagedata/Services2';

const OurServicesPage  = () => {
    return (
        <OurServicesSection>
            <Container>
                <Row>
                    <Col md={12}>
                        <HeadingLayout>
                            <OurServicesHeading>
                            {OurServices.OurServicesHeading}
                            </OurServicesHeading>
                        </HeadingLayout>
                    </Col>
               </Row>
               <Row>
                   <Col md={6} lg={3}>
                        <OurServicesSingleLayout>
                            <ImageHolder>
                            <OurServicesImage 
                                src={require("../../../assets/"+OurServices.Details[0].OurServicesImage)} 
                                alt=""
                            />
                            </ImageHolder>
                            <TextLayout>
                                <SubHeading>
                                {OurServices.Details[0].SubHeading}
                                </SubHeading>
                                <Content>
                                {OurServices.Details[0].Content}
                                </Content>
                            </TextLayout>
                        </OurServicesSingleLayout>
                   </Col>
                   <Col md={6} lg={3}>
                        <OurServicesSingleLayout>
                            <ImageHolder>
                            <OurServicesImage 
                                src={require("../../../assets/"+OurServices.Details[1].OurServicesImage)} 
                                alt=""
                            />
                            </ImageHolder>
                            <TextLayout>
                                <SubHeading>
                                {OurServices.Details[1].SubHeading}
                                </SubHeading>
                                <Content>
                                {OurServices.Details[1].Content}
                                </Content>
                            </TextLayout>
                        </OurServicesSingleLayout>
                   </Col>
                    <Col md={6} lg={3}>
                        <OurServicesSingleLayout>
                            <ImageHolder>
                            <OurServicesImage 
                                src={require("../../../assets/"+OurServices.Details[2].OurServicesImage)} 
                                alt=""
                            />
                            </ImageHolder>
                            <TextLayout>
                                <SubHeading>
                                {OurServices.Details[2].SubHeading}
                                </SubHeading>
                                <Content>
                                {OurServices.Details[2].Content}
                                </Content>
                            </TextLayout>
                        </OurServicesSingleLayout>
                    </Col>
                    <Col md={6} lg={3}>
                        <OurServicesSingleLayout>
                            <ImageHolder>
                            <OurServicesImage 
                                src={require("../../../assets/"+OurServices.Details[3].OurServicesImage)} 
                                alt=""
                            />
                            </ImageHolder>
                            <TextLayout>
                                <SubHeading>
                                {OurServices.Details[3].SubHeading}
                                </SubHeading>
                                <Content>
                                {OurServices.Details[3].Content}
                                </Content>
                            </TextLayout>
                        </OurServicesSingleLayout>
                    </Col>
               </Row>
            </Container>
        </OurServicesSection>
    );
}
export default OurServicesPage;