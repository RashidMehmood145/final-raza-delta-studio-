import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {
    BlogSection,
    HeadingLayout,
    BlogHeading,
    BlogLayout,
    BlogSingleLayout,
    BlogTitle,
    BlogText,
    ReadMoreBtn,
    BlogImg
} from './blogs.style';
import { Blog } from '../../../pagedata/Home';

const BlogPage = () => {
    return(
        <BlogSection>
            <Container>
                <HeadingLayout>
                    <BlogHeading>
                    {Blog.BlogHeading}
                    </BlogHeading>
                </HeadingLayout>
                <BlogLayout>
                    <Row>
                        <Col md={6}>
                            <BlogSingleLayout>
                                <BlogImg 
                                    src={require("../../../assets/"+Blog.BlogDetails[0].BlogImage)} 
                                    alt=""
                                />
                                <BlogTitle>{Blog.BlogDetails[0].BlogTitle}</BlogTitle>
                                <BlogText>{Blog.BlogDetails[0].BlogText}</BlogText>
                                <ReadMoreBtn>{Blog.BlogDetails[0].ReadMoreBtn}</ReadMoreBtn>
                            </BlogSingleLayout>
                        </Col>

                        <Col md={6}>
                            <BlogSingleLayout>
                                <BlogImg 
                                    src={require("../../../assets/"+Blog.BlogDetails[1].BlogImage)} 
                                    alt=""
                                />
                                <BlogTitle>{Blog.BlogDetails[1].BlogTitle}</BlogTitle>
                                <BlogText>{Blog.BlogDetails[1].BlogText}</BlogText>
                                <ReadMoreBtn>{Blog.BlogDetails[1].ReadMoreBtn}</ReadMoreBtn>
                            </BlogSingleLayout>
                        </Col>
                    </Row>
                </BlogLayout>
            </Container>
        </BlogSection>
    )
}

export default BlogPage;