import React from 'react';
import {ServicesWeProvideSection,ServicesLayout,HeadingLayout,ServicesWeProvideHeading,
    ServicesSingleLayout,ServiceImg,ServiceHeading,ServiceText,RightImageHolder,RightImage
} from './servicesweprovide.style';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ServicesWeProvide } from '../../../pagedata/Services1';

const ServiceWeProvidePage  = () => {
    return (
       <ServicesWeProvideSection>
           <Container>
                <Row>
                    <Col lg={8}>
                        <ServicesLayout>
                            <HeadingLayout>
                                <ServicesWeProvideHeading>
                                    {ServicesWeProvide.ServicesWeProvideHeading}
                                </ServicesWeProvideHeading>
                            </HeadingLayout>
                            <Row>
                                <Col md={6} sm={6}>
                                    <ServicesSingleLayout>
                                        <ServiceImg 
                                                src={require("../../../assets/"+ServicesWeProvide.ServiceImg1)} 
                                                alt=""
                                            />
                                        <ServiceHeading>
                                        {ServicesWeProvide.ServiceHeading1}
                                        </ServiceHeading>
                                        <ServiceText>
                                        {ServicesWeProvide.ServiceText1}
                                        </ServiceText>
                                    </ServicesSingleLayout>
                                </Col>
                                <Col md={6} sm={6}>
                                    <ServicesSingleLayout>
                                        <ServiceImg 
                                                src={require("../../../assets/"+ServicesWeProvide.ServiceImg2)} 
                                                alt=""
                                            />
                                        <ServiceHeading>
                                        {ServicesWeProvide.ServiceHeading2}
                                        </ServiceHeading>
                                        <ServiceText>
                                        {ServicesWeProvide.ServiceText2}
                                        </ServiceText>
                                    </ServicesSingleLayout>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} sm={6}>
                                    <ServicesSingleLayout>
                                        <ServiceImg 
                                                src={require("../../../assets/"+ServicesWeProvide.ServiceImg3)} 
                                                alt=""
                                            />
                                        <ServiceHeading>
                                        {ServicesWeProvide.ServiceHeading3}
                                        </ServiceHeading>
                                        <ServiceText>
                                        {ServicesWeProvide.ServiceText3}
                                        </ServiceText>
                                    </ServicesSingleLayout>
                                </Col>
                                <Col md={6} sm={6}>
                                    <ServicesSingleLayout>
                                        <ServiceImg 
                                                src={require("../../../assets/"+ServicesWeProvide.ServiceImg4)} 
                                                alt=""
                                            />
                                        <ServiceHeading>
                                        {ServicesWeProvide.ServiceHeading4}
                                        </ServiceHeading>
                                        <ServiceText>
                                        {ServicesWeProvide.ServiceText4}
                                        </ServiceText>
                                    </ServicesSingleLayout>
                                </Col>
                            </Row>
                        </ServicesLayout>
                    </Col>
                    <Col lg={4}>
                        <RightImageHolder>
                            <RightImage 
                                src={require("../../../assets/"+ServicesWeProvide.RightImage)} 
                                alt=""
                            />
                        </RightImageHolder>
                    </Col>
                </Row>
           </Container>
       </ServicesWeProvideSection>
    );
}
export default ServiceWeProvidePage;