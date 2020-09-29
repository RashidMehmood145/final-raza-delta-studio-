import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {OurStatsSection,
    OurStatsLayout,
    HeadingLayout,
    OurProjectsHeading,
    SingleStatLayout,
    StatImage,
    StatHeading,
    StatPara
} from './ourstats.style';

import { OurStats } from '../../../pagedata/Home';

const OurStatsPage = () => {
    return(
        <OurStatsSection>
            <Container>
                <OurStatsLayout>
                    <HeadingLayout>
                        <OurProjectsHeading>{OurStats.OurProjectsHeading}</OurProjectsHeading>
                    </HeadingLayout>
                    <Row>
                        <Col lg="3" md="6">
                            <SingleStatLayout>
                                <StatImage src={require("../../../assets/"+OurStats.StatDetails[0].StatImage)} alt=""/>
                                <StatHeading>{OurStats.StatDetails[0].StatHeading}</StatHeading>
                                <StatPara>{OurStats.StatDetails[0].StatPara}</StatPara>
                            </SingleStatLayout>
                        </Col>
                        <Col lg="3" md="6">
                            <SingleStatLayout>
                                <StatImage src={require("../../../assets/"+OurStats.StatDetails[1].StatImage)} alt=""/>
                                <StatHeading>{OurStats.StatDetails[1].StatHeading}</StatHeading>
                                <StatPara>{OurStats.StatDetails[1].StatPara}</StatPara>
                            </SingleStatLayout>
                        </Col>
                        <Col lg="3" md="6">
                            <SingleStatLayout>
                                <StatImage src={require("../../../assets/"+OurStats.StatDetails[2].StatImage)} alt=""/>
                                <StatHeading>{OurStats.StatDetails[2].StatHeading}</StatHeading>
                                <StatPara>{OurStats.StatDetails[2].StatPara}</StatPara>
                            </SingleStatLayout>
                        </Col>
                        <Col lg="3" md="6">
                            <SingleStatLayout>
                                <StatImage src={require("../../../assets/"+OurStats.StatDetails[3].StatImage)} alt=""/>
                                <StatHeading>{OurStats.StatDetails[3].StatHeading}</StatHeading>
                                <StatPara>{OurStats.StatDetails[3].StatPara}</StatPara>
                            </SingleStatLayout>
                        </Col>
                    </Row>
                </OurStatsLayout>
            </Container>
        </OurStatsSection>

    );
}

export default OurStatsPage;