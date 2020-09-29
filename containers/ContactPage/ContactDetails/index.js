import React from 'react';
import {ContactDetailsSection,ContactDetailsLayout,ContactLayout,ContactIcon,
    ContactTextLayout,ContactHeading,ContactText
} from './contactdetails.style';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactDetails } from '../../../pagedata/ContactPage';

const ContactDetailsPage  = () => {
    return (
        <ContactDetailsSection id="ContactDetailsContainer">
            <Container>
                <ContactDetailsLayout>
                    <Row>
                        <Col md={4}>
                            <ContactLayout>
                                <ContactIcon src={require("../../../assets/"+ContactDetails.ContactCol[0].ContactIcon)} alt="" />
                                <ContactTextLayout>
                                    <ContactHeading>
                                    {ContactDetails.ContactCol[0].ContactHeading}
                                    </ContactHeading>
                                    <ContactText>
                                    {ContactDetails.ContactCol[0].ContactText}
                                    </ContactText>
                                </ContactTextLayout>
                            </ContactLayout>

                        </Col>
                        <Col md={4}>
                            <ContactLayout>
                                <ContactIcon src={require("../../../assets/"+ContactDetails.ContactCol[1].ContactIcon)} alt="" />
                                <ContactTextLayout>
                                    <ContactHeading>
                                    {ContactDetails.ContactCol[1].ContactHeading}
                                    </ContactHeading>
                                    <ContactText>
                                    {ContactDetails.ContactCol[1].ContactText}
                                    </ContactText>
                                </ContactTextLayout>
                            </ContactLayout>

                        </Col>
                        <Col md={4}>
                            <ContactLayout>
                                <ContactIcon src={require("../../../assets/"+ContactDetails.ContactCol[2].ContactIcon)} alt="" />
                                <ContactTextLayout>
                                    <ContactHeading>
                                    {ContactDetails.ContactCol[2].ContactHeading}
                                    </ContactHeading>
                                    <ContactText>
                                    {ContactDetails.ContactCol[2].ContactText}
                                    </ContactText>
                                </ContactTextLayout>
                            </ContactLayout>
                        </Col>
                    </Row>
                </ContactDetailsLayout>
            </Container>
        </ContactDetailsSection>
    );
}
export default ContactDetailsPage;