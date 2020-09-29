import React from 'react';
import {CTABannerSection,TextBtnLayout,BannerText,BannerBtn} from './ctabanner.style';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CTABanner } from '../../../pagedata/Services2';

const CTABannerPage  = (props) => {
    return (
        <CTABannerSection BackgroundImg={props.BackgroundImg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <TextBtnLayout>
                            <BannerText>
                            {CTABanner.BannerText}
                            </BannerText>
                            <BannerBtn>
                            {CTABanner.BannerBtn}
                            </BannerBtn>
                        </TextBtnLayout>
                   </Col>
                </Row>
            </Container>
        </CTABannerSection>
    );
}
export default CTABannerPage;