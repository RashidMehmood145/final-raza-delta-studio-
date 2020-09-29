import React from 'react';
import {BannerSection,
    BannerContents,
    BannerContentLeft,
    BannerH3,
    BreadCrumbsLayout,
    BreadCrumbs,
    Divider
} from './banner.style'
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = (props) => {
    return (
        <BannerSection id="homeContainer" BackgroundImg={props.BackgroundImg} >
            <Container>
                <BannerContents>
                    <BannerContentLeft>
                        <BannerH3>{props.pageTitle}</BannerH3>
                        <BreadCrumbsLayout>
                            <BreadCrumbs href={props.breadCrumbsFirstLink}>{props.breadCrumbsFirst}</BreadCrumbs>
                            <Divider />
                            <BreadCrumbs href={props.breadCrumbsSecondLink}>{props.breadCrumbsSecond}</BreadCrumbs>
                        </BreadCrumbsLayout>
                    </BannerContentLeft>
                </BannerContents>
            </Container>
        </BannerSection>
    )
}

export default Banner;