import React from 'react';
import {SitemapSection,SitemapAnchor} from './sitemap.style';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sitemap } from '../../pagedata/Sitemap';

const SitemapPage  = () => {
    return (
        <SitemapSection>
            <Container>
                <Row>
                {
                   Sitemap.Blocks.map((item,idx) => {
                    return <Col md="6" lg={3}>
                        <SitemapAnchor href={item.Href}>
                                    {item.Name}
                        </SitemapAnchor>
                            
                    </Col>
                    })
                }
                </Row>
            </Container>
        </SitemapSection>
    );
}
export default SitemapPage;