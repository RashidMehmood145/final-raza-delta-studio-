import React from 'react';
import {OurWorkSection,HeadingLayout,OurWorkHeading,ImageHolder
} from './ourwork.style';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCompareImage from 'react-compare-image';
import { OurWork } from '../../../pagedata/Services2';

const OurWorkPage  = () => {
    return (
        <OurWorkSection>
            <Container>
                <Row>
                    <Col md={12}>
                    <HeadingLayout>
                        <OurWorkHeading>
                            {OurWork.OurWorkHeading}
                        </OurWorkHeading>
                    </HeadingLayout>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <ImageHolder>
                            <ReactCompareImage 
                                leftImage={require("../../../assets/"+OurWork.Image1)} 
                                leftImageLabel={OurWork.LeftImageLabel} 
                                rightImage={require("../../../assets/"+OurWork.Image2)} 
                                rightImageLabel={OurWork.RightImageLabel} 
                            />
                        </ImageHolder>
                    </Col>
                    <Col md={6}>
                        <ImageHolder>
                            <ReactCompareImage 
                                leftImage={require("../../../assets/"+OurWork.Image3)} 
                                leftImageLabel={OurWork.LeftImageLabel} 
                                rightImage={require("../../../assets/"+OurWork.Image4)} 
                                rightImageLabel={OurWork.RightImageLabel} 
                            />
                        </ImageHolder>
                    </Col>
                </Row>
            </Container>

        </OurWorkSection>
    );
}
export default OurWorkPage;