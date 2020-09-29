import React,{Component} from 'react';
import {ServicesGallerySection,GalleryWrapper,GalleryHeading,ImageHolder1,ImageHolder2,
    NextPrev,PrevImg,NextImg,GalleryImg1,GalleryImg2
} from './servicesgallery.style';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ServicesGallery } from '../../../pagedata/Services1';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ServicesGalleryPage extends Component {
    constructor(props) {
      super(props);
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
    }
    openDialogBox(imageArray,idx)
    {
        this.props.openLightBox(imageArray,idx);
    }
    next() {
        this.slider.slickNext();
    }

    previous() {
        this.slider.slickPrev();
    }
    
    render() {
        const settings = {
            arrows:false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      initialSlide: 1
                    }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                  }
                }
            ]
        };
        return (
            <ServicesGallerySection>
                <Container>
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <GalleryWrapper>
                            <GalleryHeading>
                            {ServicesGallery.GalleryHeading} 
                            </GalleryHeading>
                            <Row>
                                <Col md={8}>

                                    <Row>
                                        <Col md={6}>
                                            <ImageHolder1 onClick={this.openDialogBox.bind(this,ServicesGallery,0)}>
                                                <GalleryImg1 
                                                    src={require("../../../assets/"+ServicesGallery.GalleryImage1)} 
                                                    alt=""
                                                />
                                            </ImageHolder1>
                                        </Col>
                                        <Col md={6}>
                                            <ImageHolder1 onClick={this.openDialogBox.bind(this,ServicesGallery,1)}>
                                                <GalleryImg1 
                                                    src={require("../../../assets/"+ServicesGallery.GalleryImage2)} 
                                                    alt=""
                                                />
                                            </ImageHolder1>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={12}>
                                            <ImageHolder1 onClick={this.openDialogBox.bind(this,ServicesGallery,2)}>
                                                <GalleryImg1 
                                                    src={require("../../../assets/"+ServicesGallery.GalleryImage3)} 
                                                    alt=""
                                                />
                                            </ImageHolder1>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder2 onClick={this.openDialogBox.bind(this,ServicesGallery,3)}>
                                        <GalleryImg2 
                                            src={require("../../../assets/"+ServicesGallery.GalleryImage4)} 
                                            alt=""
                                        />
                                    </ImageHolder2>
                                </Col>
                            </Row>
                        </GalleryWrapper>
                        <GalleryWrapper>
                            <GalleryHeading>
                            {ServicesGallery.GalleryHeading} 
                            </GalleryHeading>
                            <Row>
                                <Col md={8}>

                                    <Row>
                                        <Col md={6}>
                                            <ImageHolder1 onClick={this.openDialogBox.bind(this,ServicesGallery,4)}>
                                                <GalleryImg1 
                                                    src={require("../../../assets/"+ServicesGallery.GalleryImage5)} 
                                                    alt=""
                                                />
                                            </ImageHolder1>
                                        </Col>
                                        <Col md={6}>
                                            <ImageHolder1 onClick={this.openDialogBox.bind(this,ServicesGallery,5)}>
                                                <GalleryImg1 
                                                    src={require("../../../assets/"+ServicesGallery.GalleryImage6)} 
                                                    alt=""
                                                />
                                            </ImageHolder1>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={12}>
                                            <ImageHolder1 onClick={this.openDialogBox.bind(this,ServicesGallery,6)}>
                                                <GalleryImg1 
                                                    src={require("../../../assets/"+ServicesGallery.GalleryImage7)} 
                                                    alt=""
                                                />
                                            </ImageHolder1>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={4}>
                                    <ImageHolder2 onClick={this.openDialogBox.bind(this,ServicesGallery,7)}>
                                        <GalleryImg2 
                                            src={require("../../../assets/"+ServicesGallery.GalleryImage8)} 
                                            alt=""
                                        />
                                    </ImageHolder2>
                                </Col>
                            </Row>
                        </GalleryWrapper>
                    </Slider>
                    <NextPrev>
                        <button aria-label="Prev Button" onClick={this.previous}>
                            <PrevImg src={require("../../../assets/"+ServicesGallery.PrevImg)} alt=""/>
                        </button>
                        <button aria-label="Next Button" onClick={this.next}>
                            <NextImg src={require("../../../assets/"+ServicesGallery.NextImg)} alt=""/>
                        </button>
                    </NextPrev>
                </Container>
            </ServicesGallerySection>
    );
}
}

export default ServicesGalleryPage;