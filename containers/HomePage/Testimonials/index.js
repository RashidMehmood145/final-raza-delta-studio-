import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TestimonailSection,
    TestimonailsLayout,
    HeadingLayout,
    TestimonialHeading,
    TestimonialLayout,
    LeftQuote,
    TestimonialText,
    AuthorImageHolder,
    Img,
    TestimonialAuthor,
    AuthorDesignation
} from './testimonials.style';
import { Testimonials } from '../../../pagedata/Home';
const OurStatsPage = () => {
    return(
        <TestimonailSection id="clientLove">
            <Container>
                <TestimonailsLayout>
                    <HeadingLayout>
                        <TestimonialHeading>{Testimonials.TestimonialHeading}</TestimonialHeading>
                    </HeadingLayout>
                    <Row>
                        <Col lg="4">
                            <TestimonialLayout>
                                <LeftQuote />
                                <TestimonialText>{Testimonials.TestimonialDetails[0].TestimonialText}</TestimonialText>
                                <AuthorImageHolder>
                                    <Img 
                                        src={require("../../../assets/"+Testimonials.TestimonialDetails[0].AuthorImage)} 
                                        alt=""
                                    />
                                </AuthorImageHolder>
                                <TestimonialAuthor>{Testimonials.TestimonialDetails[0].TestimonialAuthor}</TestimonialAuthor>
                                <AuthorDesignation>{Testimonials.TestimonialDetails[0].AuthorDesignation}</AuthorDesignation>
                            </TestimonialLayout>
                        </Col>
                        <Col lg="4">
                            <TestimonialLayout>
                                <LeftQuote />
                                <TestimonialText>{Testimonials.TestimonialDetails[1].TestimonialText}</TestimonialText>
                                    <AuthorImageHolder>
                                        <Img 
                                            src={require("../../../assets/"+Testimonials.TestimonialDetails[1].AuthorImage)} 
                                            alt=""
                                        />
                                    </AuthorImageHolder>
                                <TestimonialAuthor>{Testimonials.TestimonialDetails[1].TestimonialAuthor}</TestimonialAuthor>
                                <AuthorDesignation>{Testimonials.TestimonialDetails[1].AuthorDesignation}</AuthorDesignation>
                            </TestimonialLayout>
                        </Col>
                        <Col lg="4">
                            <TestimonialLayout>
                                <LeftQuote />
                                <TestimonialText>{Testimonials.TestimonialDetails[2].TestimonialText}</TestimonialText>
                                <AuthorImageHolder>
                                    <Img 
                                        src={require("../../../assets/"+Testimonials.TestimonialDetails[2].AuthorImage)} 
                                        alt=""
                                    />
                                </AuthorImageHolder>
                                <TestimonialAuthor>{Testimonials.TestimonialDetails[2].TestimonialAuthor}</TestimonialAuthor>
                                <AuthorDesignation>{Testimonials.TestimonialDetails[2].AuthorDesignation}</AuthorDesignation>
                            </TestimonialLayout>
                        </Col>
                    </Row>
                </TestimonailsLayout>
            </Container>
        </TestimonailSection>

    );
}

export default OurStatsPage;