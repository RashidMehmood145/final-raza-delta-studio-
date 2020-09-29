import React from 'react';
import {TestimonialsSection,DesktopLayout,MobileLayout,TestimonialsSingleLayout,ImageHolder,AuthorLayout,
    Author,AuthorName,Designation,QuotesHolder,TestimonialsText,QuotesIcon,Img
} from './testimonials.style';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials } from '../../../pagedata/Testimonials';

const TestimonialsPage  = () => {
    return (
           <TestimonialsSection>
               <Container>
                   <DesktopLayout>
                   <Row>
                        <Col md={6}>
                        {
                            Testimonials.Details.map((item,idx) => {
                                return idx%2===0 && <TestimonialsSingleLayout>
                                    <ImageHolder>
                                        <Img 
                                            src={require("../../../assets/"+item.Image)} 
                                            alt=""
                                        />
                                    </ImageHolder>
                                    <AuthorLayout>
                                        <Author>
                                            <AuthorName>
                                                {item.AuthorName} 
                                            </AuthorName>
                                            <Designation>
                                                {item.Designation} 
                                            </Designation>
                                        </Author>
                                        <QuotesHolder>
                                            <QuotesIcon/>
                                        </QuotesHolder>
                                    </AuthorLayout>
                                    <TestimonialsText>
                                        {item.TestimonialsText}
                                    </TestimonialsText>
                                </TestimonialsSingleLayout>
                            })
                        }
                        </Col>
                        <Col md={6}>
                        {
                                Testimonials.Details.map((item,idx) => {
                                    return idx%2!==0 && <TestimonialsSingleLayout>
                                        <ImageHolder>
                                            <Img 
                                                src={require("../../../assets/"+item.Image)} 
                                                alt=""
                                            />
                                        </ImageHolder>
                                        <AuthorLayout>
                                            <Author>
                                                <AuthorName>
                                                    {item.AuthorName} 
                                                </AuthorName>
                                                <Designation>
                                                    {item.Designation} 
                                                </Designation>
                                            </Author>
                                            <QuotesHolder>
                                                <QuotesIcon/>
                                            </QuotesHolder>
                                        </AuthorLayout>
                                        <TestimonialsText>
                                            {item.TestimonialsText}
                                        </TestimonialsText>
                                    </TestimonialsSingleLayout>
                                })
                            }
                            </Col>
                   </Row>
                   </DesktopLayout>
                   <MobileLayout>
                   <Row>
                        {
                            Testimonials.Details.map((item,idx) => {
                                return  <Col md={6}>
                                <TestimonialsSingleLayout>
                                    <ImageHolder>
                                        <Img 
                                            src={require("../../../assets/"+item.Image)} 
                                            alt=""
                                        />
                                    </ImageHolder>
                                    <AuthorLayout>
                                        <Author>
                                            <AuthorName>
                                                {item.AuthorName} 
                                            </AuthorName>
                                            <Designation>
                                                {item.Designation} 
                                            </Designation>
                                        </Author>
                                        <QuotesHolder>
                                            <QuotesIcon/>
                                        </QuotesHolder>
                                    </AuthorLayout>
                                    <TestimonialsText>
                                        {item.TestimonialsText}
                                    </TestimonialsText>
                                </TestimonialsSingleLayout>
                                </Col>
                            })
                        }
                        </Row>
                    </MobileLayout>
               </Container>
           </TestimonialsSection>
    );
}
export default TestimonialsPage;